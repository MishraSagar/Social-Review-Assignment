import React from 'react';
import posts from './posts';
import Post from './Post';
import PostForm from './PostForm';

export default function FunctionalTimeline(props) {
    let userPosts = [];

    if (localStorage.hasOwnProperty('posts-'+props.userID)){
        userPosts = JSON.parse(localStorage.getItem('posts-'+props.userID));
    }
    else {
        userPosts = [...posts[0]];
        localStorage.setItem('posts-'+props.userID, JSON.stringify(userPosts));
    }

    let postArray = userPosts.map((postObj, index) => {
        return (
            <Post {...postObj} userID={props.userID} key={"post-"+index} />
        );
    });

    console.log(postArray);
    return (
        <div className="post-container">
            <PostForm userID={props.userID}/>
            {postArray}
        </div>
    );
}
