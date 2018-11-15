import React from 'react';
import {FormGroup, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { refreshUserInfo } from '../actions';
import { bindActionCreators } from "redux";

class WorkForm extends React.Component {
    constructor(props) {
        super(props);
        if (localStorage.hasOwnProperty('user-'+this.props.userID)) {
            this.userinfo = JSON.parse(localStorage.getItem('user-'+this.props.userID));

            this.state = {
                occupation: this.userinfo.occupation,
                skills: this.userinfo.skills,
                organization: this.userinfo.organization
            }
        }
        else {
            alert("error");
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.submitUpdates = this.submitUpdates.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.value;

        if (target.id == "occupation") {
            this.setState({
                occupation: value
            });
        }
        else if (target.id == "skills") {
            this.setState({
                skills: value
            });
        }
        else if (target.id == "jobs") {
            this.setState({
                organization: value
            });
        }
    }

    handleCancel() {
        this.props.cancel();
    }

    submitUpdates () {
        let updatedUser = {
            userID: this.userinfo.userID,
            profileImage: this.userinfo.profileImage,
            userName: this.userinfo.userName,
            work: this.userinfo.work,
            following: this.userinfo.following,
            followers: this.userinfo.followers,
            activities: this.userinfo.activities,
            image: this.userinfo.image,
            whoToFollow: this.userinfo.whoToFollow,
            friends: this.userinfo.friends,
            occupation: this.state.occupation,
            gender: this.userinfo.gender,
            birthdate: this.userinfo.birthdate,
            maritalStatus: this.userinfo.maritalStatus,
            location: this.userinfo.location,
            skills: this.state.skills,
            organization: this.state.organization
        };
        localStorage.setItem('user-'+this.props.userID, JSON.stringify(updatedUser));
        this.props.refreshUserInfo(true);
        this.props.cancel();
    }

    componentDidMount() {
        this.props.refreshUserInfo(false);
    }
    
    render() {
        return (
            <div className="content">
                <form>
                    <div className="row">
                        <div className="title col-xs-4">
                            Occupation 
                        </div>
                        <div className="value col-xs-8">
                            <FormGroup
                                controlId="occupation"
                                // validationState={this.getTitleValidationState()}
                                >
                                    <FormControl
                                        type="text"
                                        value={this.state.occupation}
                                        placeholder=""
                                        onChange={this.handleChange}
                                    />
                                <FormControl.Feedback />
                            </FormGroup>
                        </div>
                    </div>
                    <div className="row">
                        <div className="title col-xs-4">
                            Skills 
                        </div>
                        <div className="value col-xs-8">
                            <FormGroup
                                controlId="skills"
                                // validationState={this.getTitleValidationState()}
                                >
                                    <FormControl
                                        type="text"
                                        value={this.state.skills}
                                        placeholder=""
                                        onChange={this.handleChange}
                                    />
                                <FormControl.Feedback />
                            </FormGroup>
                        </div>
                    </div>
                    <div className="row">
                        <div className="title col-xs-4">
                            jobs 
                        </div>
                        <div className="value col-xs-8">
                            <FormGroup
                                controlId="jobs"
                                // validationState={this.getTitleValidationState()}
                                >
                                    <FormControl
                                        type="text"
                                        value={this.state.organization}
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
    
export default connect(mapStateToProps, mapDispatchToProps)(WorkForm);