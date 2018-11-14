import React from 'react';
import posts from './posts';
import Post from './Post';
import PostForm from './PostForm';
import { connect } from "react-redux";


class Timeline extends React.Component {
    
    constructor(props) {
        super(props);
        console.log("constructor called");
        this.state = {
            userID: 0,
            show: false,
            totalPosts: this.props.totalPosts
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

    shouldComponentUpdate(nextProps){
        return nextProps.totalPosts !== this.props.totalPosts;
    }

    componentWillUpdate() {
        this.posts = JSON.parse(localStorage.getItem('posts-'+this.state.userID));
    }

    render() {
        this.posts = JSON.parse(localStorage.getItem('posts-'+this.state.userID));
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

function mapStateToProps(state) {
    console.log(state.posts.totalPosts);
    return {
        totalPosts: state.posts.totalPosts
    };
}

export default connect(mapStateToProps)(Timeline);