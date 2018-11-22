import React from 'react';
import {Modal, FormGroup, FormControl, Button, ControlLabel, HelpBlock } from 'react-bootstrap';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter, Redirect } from 'react-router-dom';
import userinfo from '../JSONs/users';
import { refreshWithNewPost } from '../actions';

class PostForm extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            title: '',
            imageUrl: '',
            description: '',
            show: false,
            userID: this.props.userID,
            shouldRefresh: false
        }
        this.isValidUrl = false;
        this.isAllInvalid = false;
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.submitPost = this.submitPost.bind(this);
        this.errorStyle = {
            fontWeight: '500',
            color: 'red',
            fontSize: '12px'
        }
        
        this.validStyle = {
            color: '500',
            color: 'green'
        }
    }

    handleClose() {
        this.setState({ 
            show: false,
            title: '',
            description: '',
            imageUrl: '',
            isAllInvalid: false  
        });  
    }
    
    handleShow() {
        this.setState({ 
            show: true
        });
    }

    handleChange(e) {
        let target = e.target;
        let value = target.value;
        
        
        if (target.id == "title") {
            this.setState({
                title: value
            });
        }
        else if (target.id == "image-url") {
            this.setState({
                imageUrl: e.target.value
            })
        }
        else if (target.id == "description") {
            this.setState({
                description: value
            });
        }
    }

    getTitleValidationState(){
        if (this.state.title == '') {
            return null;
        }
        else {
            return (this.getLengthAndValueValidated(this.state.title, 10)) ? 'success' : 'error';
        }
    }

    getImageValidationState(){
        if (this.state.imageUrl == '') {
            this.isValidUrl = false;
            return null;
        }
        else if (this.state.imageUrl.match(/https:\/\/.+\.(gif|png|jpg|jpeg)$/) != null) {
            this.isValidUrl = true;
            return 'success';
        }
        this.isValidUrl = false;
        return 'error';
    }

    getDescriptionValidationState(){
        if (this.state.description == '') {
            return null;
        }
        else {
            return (this.getLengthAndValueValidated(this.state.description, 20)) ? 'success' : 'error';
        }
    }

    getLengthAndValueValidated(str, minLength) {
        return (str.length >= minLength && (str.match(/^[a-zA-Z\s][a-zA-Z0-9\s.?,:;@#']+$/) != null)) ? true : false;
    }

    submitPost(e) {
        e.preventDefault();
        if (this.getLengthAndValueValidated(this.state.title, 10) && this.getLengthAndValueValidated(this.state.description, 20) && this.isValidUrl) {
            let newPost = {
                userID: this.state.userID,
                authorName: this.author,
                authorID: this.props.authorID,
                comment: 0,
                description: this.state.description,
                likes: 0,
                share: 0,
                title: this.state.title,
                time: (new Date()).getTime(),
                image: this.state.imageUrl
            };
            let postsArr = JSON.parse(localStorage.getItem('posts-' + this.state.userID));
            postsArr.unshift(newPost);
            localStorage.setItem('posts-' + this.state.userID, JSON.stringify(postsArr));
            this.props.updatePosts(true);
            this.props.history.push("/");
            this.handleClose();
        }
        else {
            this.setState({
                isAllInvalid: true
            });
        }
    }

    render() {
        return (
            <div className="post-form">
                <div className="btn-container">
                    <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>Post</Button>
                </div>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create Post</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    { this.state.isAllInvalid ? <div style={this.errorStyle}>Please input correct information</div> : <div></div> }
                        <form id="my-form" onSubmit={this.submitPost}>
                            <FormGroup
                            controlId="title"
                            validationState={this.getTitleValidationState()}
                            >
                            <ControlLabel>Title</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.title}
                                    placeholder="Enter title"
                                    onChange={this.handleChange}
                                />
                            <FormControl.Feedback />
                            { this.getLengthAndValueValidated(this.state.title, 10) || this.state.title == ''? <div></div> : <div style={this.errorStyle}>Title must have 10 or more characters.</div> }
                            </FormGroup>

                            <FormGroup
                            controlId="image-url"
                            validationState={this.getImageValidationState()}
                            >
                            <ControlLabel>Image Url</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.imageUrl}
                                    placeholder="Enter image url"
                                    onChange={this.handleChange}
                                />
                            <FormControl.Feedback />
                            { this.isValidUrl || this.state.imageUrl == ''? <div></div> : <div style={this.errorStyle}>Image Url is invalid</div> }
                            </FormGroup>

                            <FormGroup
                            controlId="description"
                            validationState={this.getDescriptionValidationState()}
                            >
                            <ControlLabel>Description</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.description}
                                    placeholder="Enter Description"
                                    onChange={this.handleChange}
                                    componentClass="textarea"
                                />
                            <FormControl.Feedback />
                            { this.getLengthAndValueValidated(this.state.description, 20) || this.state.description == ''? <div></div> : <div style={this.errorStyle}>Description must have 20 or more characters.</div> }
                            </FormGroup>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type="submit" bsStyle="success" form="my-form">Post</Button>
                        <Button onClick={this.handleClose} bsStyle="danger">Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isNewPostAvailable: state.posts.isNewPostAvailable
    }
}
    
function mapDispatchToProps(dispatch) {
    return bindActionCreators({updatePosts: refreshWithNewPost}, dispatch);
}
    
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostForm));