import React from 'react';
import posts from './posts';
import Post from './Post';

export default class Timeline extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            posts: [...posts[0]],
            userID: 0
        }
    }

    render() {
        console.log(this.state.posts);
        let postArray = this.state.posts.map((postObj, index) => {
            return (
                <Post {...postObj} userID={this.state.userID} key={"post-"+index} />
            );
        });
        return (
            <div className="post-container">
                {postArray}
            </div>
        );
    }
}