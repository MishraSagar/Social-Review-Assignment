import React from 'react';
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';
import userinfo from './users';

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
        this.fbLogin = this.fbLogin.bind(this);
        this.getValidationState = this.getValidationState.bind(this);
    }

    getValidationState() {
        if (this.state.email.match(/\S+@\S+\.\S+/)) {
            return 'success';
        }
        else if (this.state.email == '') {
            return null;
        }
        return 'error';
    }

    handleChange(e) {
        let target = e.target;
        let value = target.value;
        this.setState({
            [target.id]: value
        });
    }

    login() {
        // let newUser = {
        //     userID: this.state.email,
        //     profileImage: this.props[this.props.userID].profileImage,
        //     userName: "John Doe",
        //     work: "No Data Available",
        //     following: 0,
        //     followers: 0,
        //     activities: 0,
        //     image: 'https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg',
        //     whoToFollow: ["sample2@gmail.com","sample3@gmail.com","sample4@gmail.com","sample5@gmail.com"],
        //     friends: ["sample2@gmail.com","sample3@gmail.com","sample4@gmail.com","sample5@gmail.com",
        //     "sample6@gmail.com","sample7@gmail.com","sample8@gmail.com","sample9@gmail.com",
        //     "sample10@gmail.com","sample13@gmail.com","sample14@gmail.com","sample15@gmail.com",
        //     "sample12@gmail.com","sample11@gmail.com","sample16@gmail.com"],
        //     occupation: "No Data Available",
        //     gender: "Male",
        //     birthdate: "2013-01-08",
        //     maritalStatus: "Single",
        //     location: "No Data Available",
        //     skills: "No Data Available",
        //     organization: "No Data Available"
        // }


        if (this.state.email.match(/\S+@\S+\.\S+/)) {
            console.log(this.users[this.state.email].password == this.state.password);
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

    fbLogin() {

    }

    render() {
        return (
            <div className="login-form-container container-fluid">
                <div className="form-center">
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
                                placeholder="Enter text"
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