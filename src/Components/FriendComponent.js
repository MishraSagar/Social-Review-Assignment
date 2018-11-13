import React from 'react';
import { connect } from 'react-redux';
import { updateFollowing } from "../actions";
import { bindActionCreators } from "redux";



class FriendComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isFollowing: false,
            name: props.name,
            work: props.work,
            organization: props.organization
        }
    }

    handleClick(e) {
        e.preventDefault();
        if(this.state.isFollowing) {
            this.state.isFollowing = false;
            this.props.follow(this.props.following - 1);
            e.target.text = "Follow";
        }
        else {
            this.state.isFollowing = true;
            this.props.follow(this.props.following + 1);
            e.target.text = "Following";
        }
    }

    render() {
        return (
            <div className="friend-info">
                <img src={require("../assets/images/profile-girl.png")} className="friend-profile-pic" alt="Image" />
                <div className="friend-content">
                    <p className="friend-name">{this.state.name}</p>
                    <p className="work">{this.state.work} at {this.state.organization}</p>
                    <a href="" className="follow-btn" onClick={(e) => this.handleClick(e)}>Follow</a>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        following: state.followings.following
    }
}
    
function mapDispatchToProps(dispatch) {
    return bindActionCreators({follow: updateFollowing}, dispatch);
}
    
export default connect(mapStateToProps, mapDispatchToProps)(FriendComponent);