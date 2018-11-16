import React from 'react';
import posts from './posts';
import Post from './Post';
import PostForm from './PostForm';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { refreshWithNewPost } from '../actions';
import { withRouter, Redirect } from 'react-router-dom';


class Timeline extends React.Component {
    
    constructor(props) {
        console.log("timeline");
        super(props);
        console.log("constructor called");
        if (localStorage.hasOwnProperty('posts-'+0)){
            this.posts = JSON.parse(localStorage.getItem('posts-'+0));
        }
        else {
            this.posts = [...posts[0]];
            localStorage.setItem('posts-'+this.props.userID, JSON.stringify(this.posts));
        }
        this.state = {
            userID: 0,
            show: false,
            posts: this.posts
        }
    }

    componentWillUpdate() {
        this.posts = JSON.parse(localStorage.getItem('posts-'+ this.props.userID));
        console.log("component will update", this.posts);
    }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     if (nextProps.isNewPostAvailable == true) {
    //         console.log("getDerived");
    //         return ({
    //             posts: JSON.parse(localStorage.getItem('posts-'+nextProps.userID))
    //         });
    //     }
    //     else {
    //         return prevState;
    //     }
    // }

    componentDidUpdate() {
        console.log("component did update", this.posts);
        this.posts = JSON.parse(localStorage.getItem('posts-'+ this.props.userID));
        // this.props.updatePosts(false);
    }

    render() {
        // if (this.props.isNewPostAvailable == true){
        //     console.log("render render called");
        // }
         console.log("render called", this.posts);
        let postArray = this.posts.map((postObj, index) => {
            return (
                <Post {...postObj} userID={this.state.userID} key={"post-"+index} />
            );
        });
        return (
            <div className="post-container">
                <PostForm userID={this.state.userID}/>
                {postArray}
            </div>
        );
    }
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({updatePosts: refreshWithNewPost}, dispatch);
// }

function mapStateToProps(state) {
    console.log("state", state);
    return {
        isNewPostAvailable: state.posts.isNewPostAvailable
    };
}

export default connect(mapStateToProps, null)(Timeline);