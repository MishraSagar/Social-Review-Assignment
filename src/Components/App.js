import React, { Component } from 'react';
import users from '../JSONs/users'
import Header from './Header';
import Routes from '../Routes';

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
        if (localStorage.hasOwnProperty('users') == false) {
            localStorage.setItem('users', JSON.stringify(users));
        }

        if (localStorage.hasOwnProperty('email')) {
            this.userID = JSON.parse(localStorage.getItem('email'));
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

    componentDidUpdate() {
        if (this.state.isUserLoggedIn == true) {
            if (localStorage.hasOwnProperty('email')) {
                this.userID = JSON.parse(localStorage.getItem('email'));
            }
        }
    }

    userLogin(userEmail) {
        this.userID = userEmail;
        this.setState({
            isUserLoggedIn: true
        });
    }

    logout() {
        this.setState({
            isUserLoggedIn: false
        });
        let users = JSON.parse(localStorage.getItem('users'));
        let user = JSON.parse(localStorage.getItem(this.userID));
        users[this.userID] = user;
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.removeItem('email');
        localStorage.removeItem(this.userID);
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
