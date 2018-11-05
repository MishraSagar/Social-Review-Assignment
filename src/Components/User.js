import React from 'react';
import {Link} from 'react-router-dom';

export default function User(props) {
    return (
        <div className="user-info">
            
            <img src={require("../assets/images/profile.jpg")} className="img-responsive" alt="Image" />

            <h4>{props.userName}</h4>
            <p>{props.work}</p>

            <div className="user-stats">
                <div className="content">
                    <p className="main-count">{props.following}</p>
                    <p>Followings</p>
                </div>
                <div className="content">
                    <p className="main-count">{(props.followers)/1000+"K"}</p>
                    <p>Followers</p>
                </div>
                <div className="content">
                    <p className="main-count">{props.activities}</p>
                    <p>Activities</p>
                </div>
            </div>

            <Link className="add-friend-button" to="/addFriend"><i className="fa fa-user"></i>ADD AS FRIEND</Link>
        </div>
    );
}