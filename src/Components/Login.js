import React from 'react';
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';
import userinfo from '../JSONs/users';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isEmailInvalid: false,
            isPasswordInvalid: false,
            userLoggedIn: false
        }
        this.users = userinfo;
        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
        this.getValidationState = this.getValidationState.bind(this);
        this.errorStyle = {
            fontWeight: '500',
            color: '#a64540',
            fontSize: '12px',
            height: '14px'
        }  
    }

    validateEmail(email) {
        return email.match(/\S+@\S+\.\S+/);
    }

    getValidationState() {
        if (this.validateEmail(this.state.email)) {
            return 'success';
        } else {
            return (this.state.email == '') ? null : 'error';
        }
    }

    handleChange(e) {
        let target = e.target;
        let value = target.value;
        this.setState({
            [target.id]: value,
            isEmailInvalid: false,
            isPasswordInvalid: false
        });
    }

    login() {
        if (this.validateEmail(this.state.email)) {
            if (userinfo[this.state.email] == undefined) {
                this.setState({isEmailInvalid: true});
            }
            else {
                if ( this.users[this.state.email].password == this.state.password) {
                    localStorage.clear();
                    localStorage.setItem("email", JSON.stringify(this.state.email));
                    this.props.userLogin(this.state.email);
                }
                else {
                    this.passInputStyle += ".input-error";
                    this.setState({isPasswordInvalid: true});
                }
            }
        }
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
                                autoComplete="off"
                            />
                            <FormControl.Feedback />
                            <div style={this.errorStyle}>
                            { this.state.isEmailInvalid ? 'Email not found' : ''}
                            { !this.validateEmail(this.state.email) && this.state.email != ''? 'Email is incorrect': ''}
                            </div>
                        </FormGroup>
                        <FormGroup
                        controlId="password"
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
                            <div style={this.errorStyle}>
                            { this.state.isPasswordInvalid ? 'Password is invalid' : ''}
                            </div>
                        </FormGroup>
                        <Button onClick={this.login} bsStyle="success">Login</Button>
                        </form>
                </div>
            </div>
        );
    }
}