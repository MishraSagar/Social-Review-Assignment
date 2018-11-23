import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateFollowing } from "../actions";

function User(props) {
    let followings = 0;
    if (localStorage.hasOwnProperty("followingCount")) {   
        followings = JSON.parse(localStorage.getItem("followingCount"));
    }
    else {
        localStorage.setItem("followingCount", JSON.stringify(followings));
    }
    return (
        <div className="user-info">           
            <img src={props.image} className="img-responsive" alt="Image" />
            <h4>{props.userName}</h4>
            <p>{props.work}</p>
            <p>{props.occupation}</p>

            <div className="user-stats">
                <div className="content">
                    <p className="main-count">{followings}</p>
                    <p>Followings</p>
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

function mapStateToProps(state) {
    return {
        followings: state.followings.numberOfFollowing,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({follow: updateFollowing}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
