import React from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { updateFollowing } from '../actions';
import userinfo from '../JSONs/users';

class Header extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isLoggedOut: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.nameStyle = {
            color: 'white',
            fontSize: '20px',
            padding: '10px',
            display: 'inherit'
        }
    }

    handleClick() {
        this.props.logout();
        this.setState({isLoggedOut: true});
    }

    render() {
        let users;
        if (localStorage.hasOwnProperty('users')) {
            users = JSON.parse(localStorage.getItem('users'));
        }
        else {
            users = userinfo;
        }
        
        let user = this.props.isUserInfoEdited ? JSON.parse(localStorage.getItem(this.props.userID)) : users[this.props.userID];
        return (
                <Navbar collapseOnSelect={true} fluid={true}>
                    <Navbar.Header>
                        <Navbar.Brand>
                        <Link to="/dashboard">Newput</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    { (this.props.isLoggedIn) ? (
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem >
                                <div style={{marginLeft: '10px', backgroundImage: `url(${user.profileImage == ''? localStorage.getItem('user-image-'+this.props.userID) : user.profileImage })`}} className="logo">
                                </div>
                            </NavItem>
                            <NavItem>
                                <span style={this.nameStyle} onClick={() => this.props.history.push('/dashboard/timeline')}>{user.userName}</span>
                            </NavItem>
                            <NavItem>
                                <i className="fa fa-pie-chart" style={this.nameStyle} onClick={() => this.props.history.push('/charts')}></i>
                            </NavItem>
                            <NavItem>
                                <i className="fa fa-map" aria-hidden="true" style={this.nameStyle} onClick={() => this.props.history.push('/map')}></i>
                            </NavItem>
                            <NavItem>
                                <i className="fa fa-sign-out" aria-hidden="true" style={this.nameStyle} onClick={this.handleClick}></i>
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>) : (
                    ''
                    )}
                </Navbar>              
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
