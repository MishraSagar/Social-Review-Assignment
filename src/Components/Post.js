import React from 'react';
import userinfo from './users';

export default class Post extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userID: this.props.userID,
            authorID: this.props.authorID,
            authorName: userinfo[this.props.authorID].userName,
            comments: this.props.comment,
            description: this.props.description,
            likes: this.props.likes,
            share: this.props.share,
            title: this.props.title,
            uploadTime: this.props.time
        }
    }

    calculateTime(millis){ //will be implemented later.
        let date = new Date();
    }

    render() {

        return (
            <div className="post">
                <div className="post-header">
                    
                    <img src={require("../assets/images/avatar-1.png")} className="img-responsive" alt="Image" />
                    <p className="headline">
                        {`${this.state.authorName} posted on your timeline`}
                    </p>
                    <p className="timestamp">
                     50 mintues ago
                    </p>
                    
                </div>

                <div className="post-img-container">
                    <img src={require('../assets/images/post-1.jpg')} className="img-responsive" alt="post image"/>
                </div>

                <div className="post-footer">
                    <p className="headline">
                    {`${this.state.authorName} posted on your timeline`}
                    </p>

                    <p className="title">
                        {this.state.title}
                    </p>
                    <p className="description">
                        {this.state.description}  
                    </p>
                </div>

                <div className="button-container">
                        <a className="button" href=""><i className="fa fa-heart" aria-hidden="true"></i>Like ({`${this.state.likes}`})</a>
                        <a className="button" href=""><i className="fa fa-comment-o"></i>Comment ({`${this.state.comments}`})</a>
                        <a className="button" href=""><i className="fa fa-share-alt"></i>Share ({`${this.state.share}`})</a>
                    </div>   
            </div>
        );
    }
}