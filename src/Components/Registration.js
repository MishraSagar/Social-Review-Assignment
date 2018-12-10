import React from 'react';
import DatePicker from 'react-datepicker';
import {Link} from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

class Registration extends React.Component {

    constructor(props) {
        super(props);
        this.errorStyle = {
            height: '14px', 
            fontSize: '12px', 
            color: '#a64540'
        }
    }

    renderInputField = (field) => {
        const { type, meta: { touched, error}} = field;
        const className = `col-sm-6 form-group ${touched && error ? 'has-error' : '' }`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input type={type} className="form-control" {...field.input}/>
                <div style={this.errorStyle}>{ touched && error ? error : ' ' }</div>
            </div>
        );
    }

    FileInput = ({ 
    input: { value: omitValue, onChange, onBlur, ...inputProps }, 
    meta: {error, touched}, 
    ...props 
    }) => {
        const className = `col-sm-6 form-group ${error ? 'has-error' : '' }`;
    return (
        <div>
            <input
            onChange={adaptFileEventToValue(onChange)}
            onBlur={adaptFileEventToValue(onBlur)}
            type="file"
            accept="image/jpg, image/gif, image/png, image/jpeg"
            {...props.input}
            {...props}
        />
        <div style={this.errorStyle}>{ touched && error ? error : ' ' }</div>
        </div>
    );
    };

    renderSelectField = (field) => {
        const { children, meta: { pristine, touched, error}} = field;
        const className = `col-sm-6 form-group ${touched && error ? 'has-error' : '' }`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <select {...field.input} className="form-control">
                    {children}
                </select>
                <div style={this.errorStyle}>{ touched && error ? error : ' ' }</div>
            </div>
        );
    }

    renderDatePicker = (field) => {
        const { meta: { touched, error}} = field;
        const className = `col-sm-6 form-group ${touched && error ? 'has-error' : '' }`;

        return (
            <div className={className}>
                <label>{field.label}</label><br/>
                <DatePicker className="form-control" peekNextMonth showMonthDropdown showYearDropdown dropdownMode="select" {...field.input} dateForm="DD/MM/YYYY" selected={field.input.value ? field.input.value : null} 
                value = {field.input.value !== ''? moment(field.input.value).format('DD/MM/YYYY') : null} 
                />
                <div style={this.errorStyle}>{ touched && error ? error : ' ' }</div>
            </div>
        );
    }

    setImageData = (values) => {
        return new Promise(function (resolve, reject) {
            var fr = new FileReader();
            fr.onload = () => {
                localStorage.setItem('user-image-' + values.email, fr.result)
                resolve("image saved");
            }
            fr.readAsDataURL(values.image);
        });
    }

    onSubmit(values) {

        let userID = values.email;
        let checked = [];

        if (values.C == true) {
            checked[checked.length] = "C";
        }
        if (values.C++ == true) {
            checked[checked.length] = "C++";
        }
        if (values.Java == true) {
            checked[checked.length] = "Java";
        }
        if (values.Python == true) {
            checked[checked.length] = "Python";
        }
        if (values.Javascript == true) {
            checked[checked.length] = "Javascript";
        }

        let newUser = {
            userID: values.email,
            profileImage: '',
            userName: values.name,
            work: 'Software Engineer',
            following: 0,
            followers: 0,
            activities: 0,
            image: '',
            whoToFollow: [],
            friends: [],
            occupation: values.occupation,
            gender: values.gender,
            birthdate: this.getDateString(values.dob),
            maritalStatus: values.maritalStatus,
            location: values.address,
            skills: checked.join(', '),
            organization: values.organization,
            password: values.password,
            designation: values.designation
        }
        this.setImageData(values).then((result) => {
            let users = JSON.parse(localStorage.getItem("users"));
            users[userID] = newUser;
            localStorage.setItem(values.email, JSON.stringify(newUser));
            localStorage.setItem("users", JSON.stringify(users));
            localStorage.setItem("email", JSON.stringify(values.email));
            this.props.userLogin(values.email);
            this.props.history.push('/');
        });
        
    }

    getDateString(date) {
        return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                <div className="login-form-container container-fluid">
                    <div className="form-header"><h1>Registration</h1></div>
                    <div className="registration-center col-xs-10 col-sm-9 col-md-6">
                        <form onSubmit={handleSubmit(this.onSubmit.bind(this))} >

                            <fieldset>
                                <legend>Basic Information</legend>
                                <Field label="Username" name="username" component={this.renderInputField} type="text" />
                                <Field label="Name" name="name" component={this.renderInputField} type="text"
                                />
                                <Field label="Email" name="email" component={this.renderInputField} type="email"
                                />
                                <Field label="Date of Birth" name="dob" component={this.renderDatePicker} showYearDropdown={true} />
                                <Field label="Password" name="password" component={this.renderInputField} type="password"
                                />
                                <Field label="Confirm Password" name="cPassword" component={this.renderInputField} type="password"
                                />


                                <div className="col-sm-6 form-group">
                                    <label className="gender">Gender</label>
                                    <Field label="Gender" name="gender" component="input" type="radio" value="Male" /> <span style={{padding: '10px 25px 10px 5px'}}>  Male </span> 
                                    <Field label="Gender" name="gender" component="input" type="radio" value="Female"/> <span style={{padding: '10px 25px 10px 5px'}}>  Female </span>
                                    <Field label="Gender" name="gender" component="input" type="radio" value="Other"/> <span style={{padding: '10px 25px 10px 5px'}}>  Other </span> 
                                </div>

                                <Field label="Marital Status" className="form-control" name="maritalStatus" component={this.renderSelectField}>
                                    <option value="">------------Select Status-----------</option>
                                    <option value="Single">Single</option>
                                    <option value="Married">Married</option>
                                </Field>

                                <Field label="Address" name="address" component={this.renderInputField} type="text"/>
                                <Field label="State" name="state" component={this.renderSelectField} >
                                    <option value="">------------Select State------------</option>
                                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                    <option value="Assam">Assam</option>
                                    <option value="Bihar">Bihar</option>
                                    <option value="Chandigarh">Chandigarh</option>
                                    <option value="Chhattisgarh">Chhattisgarh</option>
                                    <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
                                    <option value="Daman and Diu">Daman and Diu</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Goa">Goa</option>
                                    <option value="Gujarat">Gujarat</option>
                                    <option value="Haryana">Haryana</option>
                                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                    <option value="Jharkhand">Jharkhand</option>
                                    <option value="Karnataka">Karnataka</option>
                                    <option value="Kerala">Kerala</option>
                                    <option value="Lakshadweep">Lakshadweep</option>
                                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                                    <option value="Maharashtra">Maharashtra</option>
                                    <option value="Manipur">Manipur</option>
                                    <option value="Meghalaya">Meghalaya</option>
                                    <option value="Mizoram">Mizoram</option>
                                    <option value="Nagaland">Nagaland</option>
                                    <option value="Orissa">Orissa</option>
                                    <option value="Pondicherry">Pondicherry</option>
                                    <option value="Punjab">Punjab</option>
                                    <option value="Rajasthan">Rajasthan</option>
                                    <option value="Sikkim">Sikkim</option>
                                    <option value="Tamil Nadu">Tamil Nadu</option>
                                    <option value="Tripura">Tripura</option>
                                    <option value="Uttaranchal">Uttaranchal</option>
                                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                                    <option value="West Bengal">West Bengal</option>
                                    </Field>
                            </fieldset>

                            <fieldset>
                                <legend>Work</legend>
                                    <Field label="Occupation" className="form-control" name="occupation" component={this.renderSelectField} >
                                        <option value="">----------Select an occupation----------</option>
                                        <option value="developer">Developer</option>
                                        <option value="System Engineer">System Engineer</option>
                                        <option value="IT specialist">IT specialist</option>
                                        <option value="QA">QA</option>
                                        <option value="Architect">Architect</option>
                                    </Field>


                                <Field label="Designation" name="designation" component={this.renderInputField} type="text"/>
                                <Field label="Organization" name="organization" component={this.renderInputField} type="text"/>
                                <div className="col-xs-12 form-group">
                                <label>Skills</label><br />
                                <label className="checkbox-inline">
                                    <Field name="C" component="input" type="checkbox" /> <span>C</span>
                                </label>
                                <label className="checkbox-inline">
                                    <Field name="C++" component="input" type="checkbox" /> <span>C++</span>
                                </label>
                                <label className="checkbox-inline">
                                    <Field name="Java" component="input" type="checkbox" /> <span>Java</span>
                                </label>
                                <label className="checkbox-inline">
                                    <Field name="Python" component="input" type="checkbox" /> <span>Python</span>
                                </label>
                                <label className="checkbox-inline">
                                    <Field name="Javascript" component="input" type="checkbox" /> <span>Javascript</span>
                                </label>
                                </div>
                                
                            </fieldset>

                            <fieldset>
                                <legend>Profile Image</legend>
                                <label>Choose a profile picture:</label>
                                <Field type="file"
                                name="image" component={this.FileInput}
                                />
                            </fieldset>

                            <div className="form-group">
                                <button className="btn btn-success submit" type="submit">Register</button><span>Already registered? <Link to="/login" >Login</Link></span>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    if (values.username) {
        let username = values.username;

        if (!username.match(/^[a-zA-Z0-9\-_]{10,20}$/)) {
            errors.username = 'Username should be alphanumerica and should have 10 to 20 characters';
        }
    }
    else {
        errors.username = 'Please enter username';
    }

    if (!values.gender) {
        values.gender = "male";
    }

    if (!values.maritalStatus) {
        errors.maritalStatus = "Please select your marital status";
    }

    if (values.name) {
        let name = values.name;
        if (name.length < 5) {
            errors.name = 'There should be 5 or more characters in your name.';
        }
    }
    else {
        errors.name = 'Please enter your name';
    }

    if (!values.occupation) {
        errors.occupation = "Please select occupation";
    }

    if (values.designation) {
        let designation = values.designation;
        if (designation.length < 10) {
            errors.designation = "Designation should have 10 or more characters";
        }
    }
    else {
        errors.designation = "Please enter your designation";
    }

    if (!values.organization) {
        errors.organization = "Please enter organization";
    }

    if (values.password) {
        let password = values.password;
        if (password.length < 8) {
            errors.password = "Password should be 8 or more characters long"
        }
        else if (!password.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)) {
            errors.password = "Password should be alphanumeric with atleast one letter, one number and one special character";
        }
    }
    else {
        errors.password = "Please enter password";
    }

    if (values.cPassword) {
        let cPassword = values.cPassword;
        if (cPassword !== values.password) {
            errors.cPassword = "Password do not match";
        }
    }
    else {
        errors.cPassword = "Please confirm password";
    }

    if (values.email) {
        let email = values.email;
        if (!email.match(/\S+@\S+\.\S+/)) {
            errors.email = 'Please enter valid email.';
        }
    }
    else {
        errors.email = 'Please enter your email';
    }

    if (values.address) {
        let address = values.address;
        if (address.length < 15) {
            errors.address = 'Address should have 15 or more characters.';
        }
    }
    else {
        errors.address = 'Please enter your address';
    }

    if (!values.state) {
        errors.state = 'Please select your state';
    }

    if (!values.image) {
        errors.image = 'Please select your profile image';
    }

    if (values.dob) {
        let dateOfBirth = new Date(values.dob);
        let today = new Date();
        let years = Math.floor((today.getTime() - dateOfBirth.getTime()) / (1000 * 60 * 60 * 24 * 365));
        if (years < 18) {
            errors.dob = 'You are not 18 years old.'
        }
    }
    else {
        errors.dob = 'Please enter your date of birth';
    }
    
    return errors;
}

const adaptFileEventToValue = delegate => e => delegate(e.target.files[0]);

export default withRouter(reduxForm({
    form: 'RegistrationForm',
    validate
})(Registration));