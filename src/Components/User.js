import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateFollowing } from "../actions";

export default function User(props) {

    return (
        <div className="user-info">           
            <img src={props.image} className="img-responsive" alt="Image" />
            <h4>{props.userName}</h4>
            <p>{props.work}</p>
            <p>{props.occupation}</p>

            <div className="user-stats">
                <div className="content">
                    <p className="main-count">{props.followings}</p>
                    <p>followings</p>
                </div>

                <div className="content">
                    <p className="main-count">{props.followers}</p>
                    <p>Followers</p>
                </div>

                <div className="content">
                    <p className="main-count">{props.activities}</p>
                    <p>Activities</p>
                </div>
            </div>
            <a className="add-friend-button" ><i className="fa fa-user"></i>ADD AS FRIEND</a>
        </div>
    );
}
