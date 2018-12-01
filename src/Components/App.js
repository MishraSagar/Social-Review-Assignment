import React, { Component } from 'react';
import { Route, Redirect, Switch} from 'react-router-dom';
import users from '../JSONs/users'
import Header from './Header';
import Cover from './Cover';
import Profile from './Profile';
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
        this.logout = this.logout.bind(this);
        this.login = this.login.bind(this);
    }

    componentWillMount() {
        if (localStorage.hasOwnProperty("users") == false) {
            localStorage.setItem("users", JSON.stringify(users));
        }

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
                <Routes userLogin={this.userLogin} isUserLoggedIn={this.state.isUserLoggedIn} login={this.login}  userID={this.userID}/>
            </div>
        );
    }
}

export default App;
