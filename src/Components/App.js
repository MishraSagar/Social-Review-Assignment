import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Header from './Header';
import avatar from '../assets/images/avatar-1.png'
import Cover from './Cover';
import Profile from './Profile';
import userinfo from './users';
import Routes from '../Routes';
import Login from './Login';



class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isUserLoggedIn : true
        }
        this.userID = null;
        this.userLogin = this.userLogin.bind(this);
    }

    componentWillMount() {
        if (this.state.isUserLoggedIn == true) {
            if (localStorage.hasOwnProperty("email")) {
                this.userID = JSON.parse(localStorage.getItem("email"));
                this.setState({
                    isUserLoggedIn: true
                });
            }
            else {
                this.setState({
                    isUserLoggedIn: false
                });
            }
        }
    }

    componentWillUpdate() {
        if (this.state.isUserLoggedIn == true) {
            if (localStorage.hasOwnProperty("email")) {
                this.userID = JSON.parse(localStorage.getItem("email"));
            }
        }
    }

    userLogin() {
        this.setState({isUserLoggedIn: true});
    }

    render() {
        return (
            <BrowserRouter>
                {this.state.isUserLoggedIn ? (<div>
                    <Header userName="John Doe" userImage={avatar}/>
                    <div className="container-fluid main-container">
                        <div className="profile-heading">
                          Social Profile
                        </div>
                        <Cover />

                        <div className="main-content">
                            <div className="row">
                                <div className="profile-content col-xs-12 col-sm-4 col-md-3">
                                    <Profile {...userinfo} userID={this.userID}/>
                                </div>

                                <div className="about-container col-xs-12 col-sm-8 col-md-9">
                                    <div className="row">
                                        <div className="about-content">
                                            <Routes />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>) : <Login userLogin={this.userLogin}/> }
            </BrowserRouter>
        );
    }
}

export default App;
