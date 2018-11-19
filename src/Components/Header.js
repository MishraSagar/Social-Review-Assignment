import React from 'react';
import {connect} from 'react-redux';
import userinfo from '../JSONs/users';

class Header extends React.Component {

    constructor(props){
        super(props);
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
                    <i className="fa fa-sign-out" aria-hidden="true" onClick={this.props.logout}></i>
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

export default connect(mapStateToProps)(Header);
