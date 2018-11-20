import React from 'react';
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';
import userinfo from '../JSONs/users';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            userLoggedIn: false
        }
        this.users = userinfo;
        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
        this.getValidationState = this.getValidationState.bind(this);
    }

    getValidationState() {
        if (this.state.email.match(/\S+@\S+\.\S+/)) {
            return 'success';
        } else {
            return (this.state.email == '') ? null : 'error';
        }
    }

    handleChange(e) {
        let target = e.target;
        let value = target.value;
        this.setState({
            [target.id]: value
        });
    }

    login() {
        if (this.state.email.match(/\S+@\S+\.\S+/)) {
            if (userinfo[this.state.email] == undefined) {
                alert("Email not found");
            }
            else {
                if ( this.users[this.state.email].password == this.state.password) {
                    localStorage.clear();
                    localStorage.setItem("email", JSON.stringify(this.state.email));
                    this.props.userLogin(this.state.email);
                }
                else {
                    alert("Please input valid email and password");
                }
            }
        }
    }

    fbLogin() {

    }

    render() {
        return (
            <div className="login-form-container container-fluid">
                <div className="form-center col-xs-10 col-sm-8 col-md-4">
                        <form>
                        <FormGroup
                        controlId="email"
                        validationState={this.getValidationState()}
                        >
                            <ControlLabel>Email</ControlLabel>
                            <FormControl
                                name="email"
                                type="email"
                                value={this.state.email}
                                placeholder="Enter your email"
                                onChange={this.handleChange}
                            />
                            <FormControl.Feedback />
                        </FormGroup>
                        <FormGroup
                        controlId="password"
                        //validationState={this.getValidationState()}
                        >
                            <ControlLabel>Password</ControlLabel>
                            <FormControl
                                name="password"
                                type="password"
                                value={this.state.password}
                                placeholder="Enter your password"
                                onChange={this.handleChange}
                            />
                            <FormControl.Feedback />
                        </FormGroup>
                        <Button onClick={this.login} bsStyle="success">Login</Button>
                        <span> </span>
                        </form>
                </div>
            </div>
        );
    }
}