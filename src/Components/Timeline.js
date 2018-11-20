import React from 'react';
import { connect } from "react-redux";
import posts from '../JSONs/posts';
import Post from './Post';
import PostForm from './PostForm';

class Timeline extends React.Component {
    
    constructor(props) {
        super(props);

        if (localStorage.hasOwnProperty('posts-' + this.props.userID)){
            this.posts = JSON.parse(localStorage.getItem('posts-' + this.props.userID));
        }
        else {
            this.posts = posts[this.props.userID];
            console.log(this.posts);
            debugger;
            localStorage.setItem('posts-' + this.props.userID, JSON.stringify(this.posts));
        }

        this.state = {
            userID: this.props.userID,
            show: false,
            posts: this.posts
        }
    }

    render() {
        let posts = this.posts.map((postObj, index) => {
            return (
                <Post {...postObj} userID={this.state.userID} key={"post-" + index} />
            );
        });

        return (
            <div className="post-container">
                <PostForm userID={this.state.userID} authorID={"sample2@gmail.com"}/>
                {posts}
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log("state", state);
    return {
        isNewPostAvailable: state.posts.isNewPostAvailable
    };
}

export default connect(mapStateToProps)(Timeline);