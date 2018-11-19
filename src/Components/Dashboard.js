import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './Header';
import avatar from '../assets/images/avatar-1.png'
import Cover from './Cover';
import Profile from './Profile';
import userinfo from './users';
import Routes from '../Routes';
import Login from './Login';
import Timeline from './Timeline';
import About from './About';
import posts from './posts';
import Photos from './Photos';
import FriendSection from './FriendSection';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        // this.state = {
        //     isUserLoggedIn : true
        // }
        // this.userID = null;
        // this.userLogin = this.userLogin.bind(this);
    }

    // componentWillMount() {
    //     if (this.state.isUserLoggedIn == true) {
    //         if (localStorage.hasOwnProperty("email")) {
    //             this.userID = JSON.parse(localStorage.getItem("email"));
    //             this.setState({
    //                 isUserLoggedIn: true
    //             });
    //         }
    //         else {
    //             this.setState({
    //                 isUserLoggedIn: false
    //             });
    //         }
    //     }
    // }

    render() {
        return (
                <div>
                    <Header userName="John Doe" userImage={avatar}/>
                    <div className="container-fluid main-container">
                        <div className="profile-heading">
                          Social Profile
                        </div>
                        <Cover />

                        <div className="main-content">
                            <div className="row">
                                <div className="profile-content col-xs-12 col-sm-4 col-md-3">
                                    <Profile {...userinfo} userID={this.props.userID}/>
                                </div>

                                <div className="about-container col-xs-12 col-sm-8 col-md-9">
                                    <div className="row">
                                        <div className="about-content">
                                            <Switch>
                                                <Route exact path="dashboard/timeline" render={() => <Timeline userID={this.props.userID}/>} />
                                                <Route exact path="/about" render={() => <About userID={this.props.userID} /> } />
                                                <Route exact path="/photos" render={() => <Photos userID={this.props.userID} /> } />
                                                <Route exact path="/friends" render={() => <FriendSection userID={this.props.userID} /> } />
                                            </Switch>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Dashboard;