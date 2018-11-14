import React from 'react';
import posts from './posts';
import Post from './Post';
import PostForm from './PostForm';
export default class Timeline extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            posts: [...posts[0]],
            userID: 0,
            show: false
        }

        // localStorage.setItem('posts-'+ this.state.userID, JSON.stringify(this.state.posts));
    }

    render() {
        let postArray = this.state.posts.map((postObj, index) => {
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