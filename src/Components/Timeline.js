import React from 'react';
import posts from './posts';
import Post from './Post';
import PostForm from './PostForm';
export default class Timeline extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            userID: 0,
            show: false
        }

        if (localStorage.hasOwnProperty('posts-'+this.state.userID) ){
            console.log('if');
            this.posts = JSON.parse(localStorage.getItem('posts-'+this.state.userID));
        }
        else {
            console.log('else');
            this.posts = [...posts[0]];
            localStorage.setItem('posts-'+this.state.userID, JSON.stringify(this.posts));
        }
    }

    render() {
        let postArray = JSON.parse(localStorage.getItem('posts-'+this.state.userID)).map((postObj, index) => {
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