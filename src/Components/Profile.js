import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateFollowing } from '../actions';
import User from './User';
import Following from './Following';
import Friends from './Friends';
import userinfo from '../JSONs/users';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        if (localStorage.hasOwnProperty('users')) {
            this.userinfo = JSON.parse(localStorage.getItem('users'));
        }
        else {
            this.userinfo = userinfo;
        }

        if (localStorage.hasOwnProperty(this.props.userID)) {
            this.state = {
                userinfo: JSON.parse(localStorage.getItem(this.props.userID))
            }
        }
        else {

            this.state = {
                followings: JSON.parse(localStorage.getItem('followingCount')),
                userinfo: {
                    userID: this.props.userID,
                    profileImage: this.userinfo[this.props.userID].profileImage,
                    userName: this.userinfo[this.props.userID].userName,
                    work: this.userinfo[this.props.userID].work,
                    following: this.props.following,
                    followers: this.userinfo[this.props.userID].followers,
                    activities: this.userinfo[this.props.userID].activities,
                    image: this.userinfo[this.props.userID].profileImage,
                    whoToFollow: this.userinfo[this.props.userID].whoToFollow,
                    friends: this.userinfo[this.props.userID].friends,
                    occupation: this.userinfo[this.props.userID].occupation,
                    gender: this.userinfo[this.props.userID].gender,
                    birthdate: this.userinfo[this.props.userID].birthdate,
                    maritalStatus: this.userinfo[this.props.userID].maritalStatus,
                    location: this.userinfo[this.props.userID].location,
                    skills: this.userinfo[this.props.userID].skills,
                    organization: this.userinfo[this.props.userID].organization,
                    password: this.userinfo[this.props.userID].password,
                    designation: this.userinfo[this.props.userID].designation
                }
            }
            localStorage.setItem(this.props.userID, JSON.stringify(this.state.userinfo));
        }
        this.getFollowingInfo = this.getFollowingInfo.bind(this);
        this.getFriendsName = this.getFriendsName.bind(this);
    }

    componentDidMount() {
        if (localStorage.hasOwnProperty(this.props.userID + 'followingCount')) {
            this.props.follow(JSON.parse(localStorage.getItem(this.props.userID + 'followingCount')), this.props.userID);
        }
        else {
            this.props.follow(0);
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

    getFollowingInfo() {
        let list = [];

        list = this.state.userinfo.whoToFollow.map((id) => {
            return ({
                userName: this.userinfo[id].userName,
                work: this.userinfo[id].work
            });
        });
        return list;
    }

    getFriendsName() {
        let friends = [];

        friends = this.state.userinfo.friends.map((id, index) => {
            return this.userinfo[id].userName;
        });

        return friends;
    }

    render() {
         
        let list = this.getFollowingInfo();
        let friends = this.getFriendsName();
        return (
            <div>
                <User followings={this.props.following} {...this.state.userinfo} />
                <Following whoToFollow={list} />
                <Friends friends={friends} />
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