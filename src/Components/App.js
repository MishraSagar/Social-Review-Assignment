import React, { Component } from 'react';
import { Route, Redirect, Switch} from 'react-router-dom';
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
            isUserLoggedIn : false
        }
        this.userID = null;
        this.userLogin = this.userLogin.bind(this);
    }

    componentWillMount() {
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

    componentWillUpdate() {
        if (this.state.isUserLoggedIn == true) {
            if (localStorage.hasOwnProperty("email")) {
                this.userID = JSON.parse(localStorage.getItem("email"));
            }
        }
    }

    userLogin(userEmail) {
        console.log("userlogin called");
        this.setState({
            isUserLoggedIn: true
        });
        this.userID = userEmail;
    }


    render() {
        return (
            <div>
                <Switch>
                    <Route path="/login" render={() => this.state.isUserLoggedIn ? <Redirect to="/"/> : <Login userLogin={this.userLogin}/>} />
                    <Route path="/" render={() => this.state.isUserLoggedIn ? (<div>
                    <Header userID={this.userID}/>
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
                                            <Routes userId={this.userID} isUserLoggedIn={this.state.isUserLoggedIn}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>) : <Redirect from="/" to="/login" />} />
                </Switch>
            </div>
        );
    }
}

export default App;
