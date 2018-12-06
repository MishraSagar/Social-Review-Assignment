import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import userinfo from '../JSONs/users';

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isUserValid: true
        }
        this.users = JSON.parse(localStorage.getItem("users"));
        this.errorStyle = {
            height: '14px',
            fontSize: '12px', 
            color: '#a64540'
        }
    }
    renderInputField = (field) => {
        const { type, meta: { pristine, touched, error}} = field;
        const className = `form-group ${touched && error ? 'has-error' : '' }`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input type={type} className="form-control" {...field.input}/>
                <div style={this.errorStyle}>{ touched && error ? error : ' ' }</div>
            </div>
        );
    }

    register = () => {
        this.props.history.push('/registration');
    }

    login = (values) => {
        if (this.users[values.email] == undefined || this.users[values.email].password != values.password) {
            this.setState({isUserValid: false});
            return;
        }
        localStorage.setItem("email", JSON.stringify(values.email));
        this.props.userLogin(values.email);
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <div className="login-form-container container-fluid">
                <div style={{textAlign: 'center', margin: '50px'}}><h1>Login</h1></div>
                <div className="form-center col-xs-10 col-sm-8 col-md-4">
                    <form onSubmit={handleSubmit(this.login)}>
                        <div style={{ height: '16px', fontSize: '14px', color: '#a64540', textAlign: 'center' }}>{ this.state.isUserValid? ' ' : 'Invalid Email or Password' }</div>
                        <Field label="Email" name="email" component={this.renderInputField} type="email"
                                />
                        <Field label="Password" name="password" component={this.renderInputField} type="password"
                                />
                        <div className="col-xs-12 form-group" style={{padding: '0'}}>
                                <button style={{display: 'block', display: 'inline', marginRight: '10px'}} className="btn btn-success" type="submit">Login</button>
                                <span>Not yet registered? <Link to="/registration">Register</Link></span>
                                {/* <button onClick={this.register} style={{display: 'block', marginTop: '15px', display: 'inline'}} className="btn btn-primary">Register</button> */}
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

function validate(values, props) {
    const errors = {};
    if (values.email) {
        let email = values.email;
        if (!email.match(/\S+@\S+\.\S+/)) {
            errors.email = 'Please enter valid email.';
        }
    }
    else {
        errors.email = 'Please enter your email';
    }

    if (!values.password) {
        errors.password = "Please enter password";
    }

    return errors;
}

export default withRouter(reduxForm({
    form: 'LoginForm',
    validate
})(Login));