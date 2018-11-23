import React, { Component } from 'react';
import { Route, Redirect, Switch} from 'react-router-dom';
import Header from './Header';
import Cover from './Cover';
import Profile from './Profile';
import Routes from '../Routes';
import Login from './Login';
import userinfo from '../JSONs/users';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isUserLoggedIn : false
        }
        this.userID = null;
        this.userLogin = this.userLogin.bind(this);
        this.logout = this.logout.bind(this);
        this.login = this.login.bind(this);
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
        this.setState({
            isUserLoggedIn: true
        });
        this.userID = userEmail;
    }

    logout() {
        localStorage.clear();
        this.setState({
            isUserLoggedIn: false
        });
    }

    login() {
        this.setState({
            isUserLoggedIn: true
        });
    }


    render() {
        return (
            <div>
                <Header userID={this.userID} logout={this.logout} isLoggedIn={this.state.isUserLoggedIn}/>
                <Switch>
                    <Route path="/login" render={() => this.state.isUserLoggedIn ? <Redirect to="/"/> : <Login userLogin={this.userLogin} />} />
                    <Route path="/" render={() => this.state.isUserLoggedIn ? (<div>
                    <div className="container-fluid main-container">
                        <div className="profile-heading">
                          Social Profile
                        </div>
                        <Cover />

                        <div className="main-content">
                            <div className="row">
                                <div className="about-container col-sm-8 col-sm-push-4 col-md-9 col-md-push-3">
                                    <div className="row">
                                        <div className="about-content">
                                            <Routes userId={this.userID} isUserLoggedIn={this.state.isUserLoggedIn}/>
                                        </div>
                                    </div>
                                </div>

                                <div className="profile-content col-sm-4 col-sm-pull-8 col-md-3 col-md-pull-9">
                                    <Profile {...userinfo} userID={this.userID}/>
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
