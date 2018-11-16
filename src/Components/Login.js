import React from 'react';
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
        this.fbLogin = this.fbLogin.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.value;
        this.setState({
            [target.id]: value
        });
    }

    login() {

    }

    fbLogin() {

    }

    render() {
        return (
            <div className="login-form-container container-fluid">
                <div className="form-center">
                        <form>
                        <FormGroup
                        controlId="email"
                        // validationState={this.getValidationState()}
                        >
                            <ControlLabel>Email</ControlLabel>
                            <FormControl
                                name="email"
                                type="email"
                                value={this.state.email}
                                placeholder="Enter text"
                                onChange={this.handleChange}
                            />
                            <FormControl.Feedback />
                        </FormGroup>
                        <FormGroup
                        controlId="password"
                        // validationState={this.getValidationState()}
                        >
                            <ControlLabel>Password</ControlLabel>
                            <FormControl
                                name="password"
                                type="password"
                                value={this.state.password}
                                placeholder="Enter text"
                                onChange={this.handleChange}
                            />
                            <FormControl.Feedback />
                        </FormGroup>
                        <Button onClick={this.login} bsStyle="success">Login</Button>
                        <span> </span>
                        <Button onClick={this.fbLogin} bsStyle="primary">Facebook</Button>
                        </form>
                </div>
            </div>
        );
    }
}