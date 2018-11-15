import React from 'react';
import {Modal, FormGroup, FormControl, Button, ControlLabel, HelpBlock } from 'react-bootstrap';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { refreshWithNewPost } from '../actions';

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            imageUrl: '',
            description: '',
            show: false,
            userID: this.props.userID
        }
        this.isValidUrl = false;
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.submitPost = this.submitPost.bind(this);
    }

    handleClose() {
        this.setState({ show: false }); 
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
        if (this.state.title.length >= 10) {
            return 'success';
        }
        else if (this.state.title == '') {
            return null;
        }
        return 'error';
    }

    getImageValidationState(){
        if (this.state.imageUrl.match(/https:\/\/.+\.(gif|png|jpg|jpeg)$/) != null) {
            this.isValidUrl = true;
            return 'success';
        }
        else if (this.state.imageUrl == '') {
            this.isValidUrl = false;
            return null;
        }
        this.isValidUrl = false;
        return 'error';
    }

    getDescriptionValidationState(){
        if (this.state.description.length >= 20) {
            return 'success';
        }
        else if (this.state.description == '') {
            return null;
        }
        return 'error';
    }

    submitPost() {
        if (this.state.description.length < 20 || this.state.title.length < 10 || !this.isValidUrl) {
            alert("Please input valid details");
        }
        else {
            let newPost = {
                userID: this.state.userID,
                authorID: 1,
                comment: 0,
                description: this.state.description,
                likes: 0,
                share: 0,
                title: this.state.title,
                time: (new Date()).getTime()
            };
            let postsArr = JSON.parse(localStorage.getItem('posts-'+this.state.userID));
            postsArr.unshift(newPost);
            localStorage.setItem('posts-'+this.state.userID, JSON.stringify(postsArr));
            console.log("storage updated");
            this.props.updateTotalPosts(this.props.totalPosts + 1);
            this.handleClose();
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
                        <form>
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
                            <HelpBlock>Title should have 10 or more characters</HelpBlock>
                            </FormGroup>

                            <FormGroup
                            controlId="image-url"
                            validationState={this.getImageValidationState()}
                            >
                            <ControlLabel>Image Url</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.imageUrl}
                                    placeholder="Enter title"
                                    onChange={this.handleChange}
                                />
                            <FormControl.Feedback />
                            <HelpBlock>Image url should be valid</HelpBlock>
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
                            <HelpBlock>Description should have 20 or more characters</HelpBlock>
                            </FormGroup>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.submitPost} bsStyle="success">Post</Button>
                        <Button onClick={this.handleClose} bsStyle="danger">Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        totalPosts: state.posts.totalPosts
    }
}
    
function mapDispatchToProps(dispatch) {
    return bindActionCreators({updateTotalPosts: refreshWithNewPost}, dispatch);
}
    
export default connect(mapStateToProps, mapDispatchToProps)(PostForm);