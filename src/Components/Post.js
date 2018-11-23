import React from 'react';
import userinfo from '../JSONs/users';

export default class Post extends React.Component {

    constructor(props) {
        super(props);
        this.userinfo = userinfo;
        this.authorinfo = this.userinfo[this.props.authorID];
        this.state = {
            userID: this.props.userID,
            authorID: this.props.authorID,
            authorName: this.authorinfo.userName,
            comments: this.props.comment,
            description: this.props.description,
            likes: this.props.likes,
            share: this.props.share,
            title: this.props.title,
            uploadTime: this.props.time,
            image: this.props.image
        }
    }

    calculateTime(millis){ //will be implemented later.
        let date = new Date();
        let diffMilliSeconds = date.getTime() - this.state.uploadTime;
        let seconds = diffMilliSeconds / 1000;
        let minutes = seconds / 60;
        let hours = minutes / 60;
        let days = hours / 24;
        
        if (days > 30) {
            return `Posted on ${date.toLocaleDateString()}`;
        }
        else if (hours > 24) {
            return `${Math.floor(days)} days ago`;
        }
        else if (minutes > 59) {
            return `${Math.floor(hours)} hours ago`
        }
        else if (seconds > 59) {
            return `${Math.floor(minutes)} minutes ago`
        }   
        else if (diffMilliSeconds > 1000) {
            return `${Math.floor(seconds)} seconds ago`
        }
        else {
            return "Just now";
        }
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
                     {this.calculateTime(this.state.uploadTime)}
                    </p>   
                </div>

                <div className="post-img-container">
                    <img src={this.state.image} className="img-responsive" alt="post image"/>
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