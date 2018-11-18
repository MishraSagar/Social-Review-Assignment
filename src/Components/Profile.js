import React from 'react';
import User from './User';
import Following from './Following';
import Friends from './Friends';
import { connect } from "react-redux";


class Profile extends React.Component {

    constructor(props) {
        super(props);
        console.log("cons");
        if (localStorage.hasOwnProperty(this.props.userID)) {
            console.log("profile if");
            this.state = {
                userinfo: JSON.parse(localStorage.getItem(this.props.userID))
            }
        }
        else {
            console.log("profile else");
            this.state = {
                userinfo: {
                    userID: this.props.userID,
                    profileImage: this.props[this.props.userID].profileImage,
                    userName: this.props[this.props.userID].userName,
                    work: this.props[this.props.userID].work,
                    following: this.props.following,
                    followers: this.props[this.props.userID].followers,
                    activities: this.props[this.props.userID].activities,
                    image: this.props[this.props.userID].profileImage,
                    whoToFollow: this.props[this.props.userID].whoToFollow,
                    friends: this.props[this.props.userID].friends,
                    occupation: this.props[this.props.userID].occupation,
                    gender: this.props[this.props.userID].gender,
                    birthdate: this.props[this.props.userID].birthdate,
                    maritalStatus: this.props[this.props.userID].maritalStatus,
                    location: this.props[this.props.userID].location,
                    skills: this.props[this.props.userID].skills,
                    organization: this.props[this.props.userID].organization,
                    password: this.props[this.props.userID].password
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
                <User followings={this.props.following} {...this.state.userinfo} />
                <Following following={this.state.userinfo.whoToFollow} users={this.props}/>
                <Friends friends={this.state.userinfo.friends} users={this.props} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state.updateUser.isUpdated);
    return {
        following: state.followings.following,
        isUserInfoEdited: state.updateUser.isUpdated
    }
}

export default connect(mapStateToProps)(Profile);