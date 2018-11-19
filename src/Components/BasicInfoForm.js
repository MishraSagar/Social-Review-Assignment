import React from 'react';
import {FormGroup, FormControl, Button, Radio } from 'react-bootstrap';
import { connect } from 'react-redux';
import { refreshUserInfo } from '../actions';
import { bindActionCreators } from "redux";

class BasicInfoForm extends React.Component {
    constructor(props) {
        super(props);
        if (localStorage.hasOwnProperty(this.props.userID)) {
            this.userinfo = JSON.parse(localStorage.getItem(this.props.userID));

            this.state = {
                name: this.userinfo.userName,
                gender: this.userinfo.gender,
                birthdate: this.userinfo.birthdate,
                maritalStatus: this.userinfo.maritalStatus,
                location: this.userinfo.location,
            }
        }
        else {
            alert("error");
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.submitUpdates = this.submitUpdates.bind(this);
    }

    componentDidMount() {
        this.props.refreshUserInfo(false);
    }

    handleChange(e) {
        // e.preventDefault();
        let target = e.target;
        let value = target.value;
        if (target.id) {
            this.setState({[target.id]: value})
        } else {
            this.setState({[target.name]: e.target.value})
        }
    }

    handleCancel() {
        this.props.cancel();
    }

    submitUpdates() {
        let updatedUser = {
            userID: this.userinfo.userID,
            profileImage: this.userinfo.profileImage,
            userName: this.state.name,
            work: this.userinfo.work,
            following: this.userinfo.following,
            followers: this.userinfo.followers,
            activities: this.userinfo.activities,
            image: this.userinfo.image,
            whoToFollow: this.userinfo.whoToFollow,
            friends: this.userinfo.friends,
            occupation: this.userinfo.occupation,
            gender: this.state.gender,
            birthdate: this.state.birthdate,
            maritalStatus: this.state.maritalStatus,
            location: this.state.location,
            skills: this.userinfo.skills,
            organization: this.userinfo.organization
        };
        localStorage.setItem(this.props.userID, JSON.stringify(updatedUser));
        this.props.refreshUserInfo(true);
        this.props.cancel();
    }

    render() {
        return (
            <div className="content">
                <form>
                    <div className="row">
                        <div className="title col-xs-4">
                            Full Name 
                        </div>
                        <div className="value col-xs-8">
                            <FormGroup
                                controlId="name"
                                // validationState={this.getTitleValidationState()}
                                >
                                    <FormControl
                                        type="text"
                                        value={this.state.name}
                                        placeholder=""
                                        onChange={this.handleChange}
                                    />
                                <FormControl.Feedback />
                            </FormGroup>
                        </div>
                    </div>
                    <div className="row">
                        <div className="title col-xs-4">
                            Gender 
                        </div>
                        <div className="value col-xs-8">
                            <FormGroup controlId="gender">
                                <Radio name="gender" value="Male" inline checked={this.state.gender === 'Male'} onChange={this.handleChange} >
                                    Male
                                </Radio>{' '}
                                <Radio name="gender" value="Female" inline checked={this.state.gender === 'Female'} onChange={this.handleChange} >
                                    Female
                                </Radio>{' '}
                                <Radio name="gender" value="Other" inline checked={this.state.gender === 'Other'} onChange={this.handleChange} >
                                    Other
                                </Radio>
                            </FormGroup>
                        </div>
                    </div>
                    <div className="row">
                        <div className="title col-xs-4">
                            Date of Birth 
                        </div>
                        <div className="value col-xs-8">
                            <input type="date" id="birthdate" value={this.state.birthdate} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="title col-xs-4">
                        Marital Status 
                        </div>
                        <div className="value col-xs-8">
                            <FormGroup controlId="maritalStatus">
                                <FormControl componentClass="select" placeholder="select" onChange={this.handleChange} value={this.state.maritalStatus}>
                                    <option value="Single">Single</option>
                                    <option value="Married">Married</option>
                                </FormControl>
                            </FormGroup>
                        </div>
                    </div>
                    <div className="row">
                        <div className="title col-xs-4">
                        Location 
                        </div>
                        <div className="value col-xs-8">
                            <FormGroup
                                controlId="location"
                                // validationState={this.getTitleValidationState()}
                                >
                                    <FormControl
                                        type="text"
                                        value={this.state.location}
                                        placeholder=""
                                        onChange={this.handleChange}
                                    />
                                <FormControl.Feedback />
                            </FormGroup>
                        </div>
                    </div>
                    <Button onClick={this.submitUpdates} bsStyle="success">Save</Button>
                    <span> </span>
                    <Button onClick={this.handleCancel} bsStyle="danger">Cancel</Button>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isUserInfoEdited: state.updateUser.isUpdated
    };
}
    
function mapDispatchToProps(dispatch) {
    return bindActionCreators({refreshUserInfo}, dispatch);
}
    
export default connect(mapStateToProps, mapDispatchToProps)(BasicInfoForm);