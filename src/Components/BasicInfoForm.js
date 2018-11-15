import React from 'react';
import {FormGroup, FormControl, Button } from 'react-bootstrap';

export default class BasicInfoForm extends React.Component {
    constructor(props) {
        super(props);
        if (localStorage.hasOwnProperty('user-'+this.props.userID)) {
            this.userinfo = JSON.parse(localStorage.getItem('user-'+this.props.userID));

            this.state = {
                name: this.userinfo.userName,
                gender: this.userinfo.gender,
                birthdate: this.userinfo.birthdate,
                maritalStatus: this.userinfo.maritalStatus,
                location: this.userinfo.location
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

        if (target.id == "name") {
            this.setState({
                name: value
            });
        }
        else if (target.id == "gender") {
            this.setState({
                gender: value
            });
        }
        else if (target.id == "birthdate") {
            this.setState({
                birthdate: value
            });
        }
        else if (target.id == "marital-status") {
            this.setState({
                maritalStatus: value
            });
        }
        else if (target.id == "location") {
            this.setState({
                location: value
            });
        }
    }

    handleCancel() {
        this.props.cancel();
    }

    submitUpdates() {

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
                            <FormGroup
                                controlId="gender"
                                // validationState={this.getTitleValidationState()}
                                >
                                    <FormControl
                                        type="text"
                                        value={this.state.gender}
                                        placeholder=""
                                        onChange={this.handleChange}
                                    />
                                <FormControl.Feedback />
                            </FormGroup>
                        </div>
                    </div>
                    <div className="row">
                        <div className="title col-xs-4">
                            Birthdate 
                        </div>
                        <div className="value col-xs-8">
                            <FormGroup
                                controlId="birthdate"
                                // validationState={this.getTitleValidationState()}
                                >
                                    <FormControl
                                        type="text"
                                        value={this.state.birthdate}
                                        placeholder=""
                                        onChange={this.handleChange}
                                    />
                                <FormControl.Feedback />
                            </FormGroup>
                        </div>
                    </div>
                    <div className="row">
                        <div className="title col-xs-4">
                        Marital Status 
                        </div>
                        <div className="value col-xs-8">
                            <FormGroup
                                controlId="marital-status"
                                // validationState={this.getTitleValidationState()}
                                >
                                    <FormControl
                                        type="text"
                                        value={this.state.maritalStatus}
                                        placeholder=""
                                        onChange={this.handleChange}
                                    />
                                <FormControl.Feedback />
                            </FormGroup>
                        </div>
                    </div>
                    <div className="row">
                        <div className="title col-xs-4">
                        location 
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