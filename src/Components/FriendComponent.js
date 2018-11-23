import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { updateFollowing } from "../actions";

class FriendComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            friendID: this.props.friendID,
            name: props.name,
            work: props.work,
            organization: props.organization,
            isFollowing: (localStorage.hasOwnProperty("following-" + this.props.friendID) ? true : false)
        }
    }

    handleClick(e) {
        e.preventDefault();
        if(this.state.isFollowing) {
            localStorage.removeItem("following-" + this.state.friendID);
            localStorage.setItem("followingCount", JSON.stringify(this.props.following - 1));
            this.props.follow(this.props.following - 1);
            this.state.isFollowing = false;
        }
        else {
            localStorage.setItem("following-" + this.state.friendID, true);
            localStorage.setItem("followingCount", JSON.stringify(this.props.following + 1));
            this.props.follow(this.props.following + 1);
            this.state.isFollowing = true;
        }
    }

    render() {
        return (
            <div className="friend-info">
                <img src={require("../assets/images/profile-girl.png")} className="friend-profile-pic" alt="Image" />
                <div className="friend-content">
                    <p className="friend-name">{this.state.name}</p>
                    <p className="work">{this.state.work} at {this.state.organization}</p>
                    <a href="" className="follow-btn" onClick={(e) => this.handleClick(e)}>
                    { this.state.isFollowing ? <span>Following</span> : <span>Follow</span>}
                    </a>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        following: state.followings.numberOfFollowing
    }
}
    
function mapDispatchToProps(dispatch) {
    return bindActionCreators({follow: updateFollowing}, dispatch);
}
    
export default connect(mapStateToProps, mapDispatchToProps)(FriendComponent);