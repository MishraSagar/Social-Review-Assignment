import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateFollowing } from "../actions";
import User from './User';
import Following from './Following';
import Friends from './Friends';
import userinfo from '../JSONs/users';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        if (localStorage.hasOwnProperty(this.props.userID)) {
            this.state = {
                userinfo: JSON.parse(localStorage.getItem(this.props.userID))
            }
        }
        else {
            this.state = {
                followings: JSON.parse(localStorage.getItem("followingCount")),
                userinfo: {
                    userID: this.props.userID,
                    profileImage: userinfo[this.props.userID].profileImage,
                    userName: userinfo[this.props.userID].userName,
                    work: userinfo[this.props.userID].work,
                    following: this.props.following,
                    followers: userinfo[this.props.userID].followers,
                    activities: userinfo[this.props.userID].activities,
                    image: userinfo[this.props.userID].profileImage,
                    whoToFollow: userinfo[this.props.userID].whoToFollow,
                    friends: userinfo[this.props.userID].friends,
                    occupation: userinfo[this.props.userID].occupation,
                    gender: userinfo[this.props.userID].gender,
                    birthdate: userinfo[this.props.userID].birthdate,
                    maritalStatus: userinfo[this.props.userID].maritalStatus,
                    location: userinfo[this.props.userID].location,
                    skills: userinfo[this.props.userID].skills,
                    organization: userinfo[this.props.userID].organization,
                    password: userinfo[this.props.userID].password
                }
            }
            localStorage.setItem(this.props.userID, JSON.stringify(this.state.userinfo));
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.isUserInfoEdited == true) {
            return ({
                userinfo: JSON.parse(localStorage.getItem(nextProps.userID))
            });
        }
        else {
            return prevState;
        }
    }

    render() {
        return (
            <div>
                <User {...this.state.userinfo} />
                <Following following={this.state.userinfo.whoToFollow} />
                <Friends friends={this.state.userinfo.friends} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        following: state.followings.numberOfFollowing,
        isUserInfoEdited: state.updateUser.isUpdated
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({follow: updateFollowing}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);