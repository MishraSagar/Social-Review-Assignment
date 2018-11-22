import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import posts from '../JSONs/posts';
import Post from './Post';
import PostForm from './PostForm';
import { refreshWithNewPost } from '../actions';

class Timeline extends React.Component {
    
    constructor(props) {
        super(props);

        if (localStorage.hasOwnProperty('posts-' + this.props.userID)){
            this.posts = JSON.parse(localStorage.getItem('posts-' + this.props.userID));
        }
        else {
            this.posts = posts[this.props.userID];
            localStorage.setItem('posts-' + this.props.userID, JSON.stringify(this.posts));
        }

        this.state = {
            userID: this.props.userID,
            show: false,
            posts: this.posts,
            newPost: false
        }
        this.generatePosts = this.generatePosts.bind(this);
    }

    getUserData() {
        return JSON.parse(localStorage.getItem('posts-' + this.state.userID));
    }

    componentDidUpdate() {
        if (this.props.isNewPostAvailable == true) {
            this.setState({newPost: true}, () => {
                this.posts = this.getUserData();
                this.props.updatePosts(false);
            });
        }
    }

    generatePosts() {
        let posts = this.posts.map((postObj, index) => {
            return (
                <Post {...postObj} userID={this.state.userID} key={"post-" + index} />
            );
        });
        return posts;
    }
    
    render() {
        return (
            <div className="post-container">
                <PostForm userID={this.state.userID} authorID={"sample2@gmail.com"}/>
                {this.generatePosts()}
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

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);