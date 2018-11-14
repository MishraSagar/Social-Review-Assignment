import React from 'react';
import User from './User';
import Following from './Following';
import Friends from './Friends';
import { connect } from "react-redux";


class Profile extends React.Component {

    constructor(props) {
        super(props);
         this.state = {
            userinfo: {
                userID: this.props.userID,
                profileImage: this.props[this.props.userID].profileImage,
                userName: this.props[this.props.userID].userName,
                work: this.props[this.props.userID].work,
                following: this.props.following,
                followers: this.props[this.props.userID].followers,
                activities: this.props[this.props.userID].activities,
                image: this.props[this.props.userID].profileImage
            },
            whoToFollow: this.props[this.props.userID].whoToFollow,
            friends: this.props[this.props.userID].friends
        }

    }

    render() {
        return (
            <div>
                <User followings={this.props.following} {...this.state.userinfo} />
                <Following following={this.state.whoToFollow} users={this.props}/>
                <Friends friends={this.state.friends} users={this.props} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        following: state.followings.following
    }
}

export default connect(mapStateToProps)(Profile);