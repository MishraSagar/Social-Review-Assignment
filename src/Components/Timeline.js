import React from 'react';
import posts from './posts';
import Post from './Post';
import {Button, Modal} from 'react-bootstrap';
export default class Timeline extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            posts: [...posts[0]],
            userID: 0,
            show: false
        }
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);

        // localStorage.setItem('posts-'+ this.state.userID, JSON.stringify(this.state.posts));
    }
    handleClose() {
        this.setState({ show: false }); 
    }
    
    handleShow() {
        this.setState({ 
            show: true
        });

    }

    render() {
        let postArray = this.state.posts.map((postObj, index) => {
            return (
                <Post {...postObj} userID={this.state.userID} key={"post-"+index} />
            );
        });
        return (
            <div className="post-container">
                <div className="btn-container">
                    <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>Post</Button>
                </div>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create Post</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
                {postArray}
            </div>
        );
    }
}