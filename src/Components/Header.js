import React from 'react';
import userinfo from './users';
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';

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
                    <Button onClick={this.props.logout} bsStyle="warning">Logout</Button>
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
