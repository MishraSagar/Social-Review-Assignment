import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import { updateFollowing } from "../actions";
import userinfo from '../JSONs/users';

class Header extends React.Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.follow(0);
        this.props.logout();
    }

    render() {
        let user = this.props.isUserInfoEdited ? JSON.parse(localStorage.getItem(this.props.userID)) : userinfo[this.props.userID];
        return (
            <header>
                <div className="company-name">
                    Newput
                </div>
                <div className="nav-user">
                    <div className="logo">
                        <img src={user.profileImage} alt="user image"/>
                    </div>
                    {user.userName}
                    <span> </span>
                    <i className="fa fa-sign-out" aria-hidden="true" onClick={this.handleClick}></i>
                </div>
            </header>
        );
    }
}

function mapStateToProps(state) {
    return {
        isUserInfoEdited: state.updateUser.isUpdated
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({follow: updateFollowing}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
