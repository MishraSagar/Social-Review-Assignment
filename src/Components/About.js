import React from 'react';
import userinfo from './users';

export default class About extends React.Component {
     
    constructor(props) {
        super(props);
        this.state = {
            userID: 0,
        }
    }

    render() {
        return (
            <div className="about">
                <div className="basic-info">
                    <div className="header">
                        BASIC INFORMATION
                    </div>
                    <div className="content">
                        <div className="row">
                            <div className="title col-xs-4">
                                Full Name 
                            </div>
                            <div className="value col-xs-8">
                                {userinfo[this.state.userID].userName}
                            </div>
                        </div>
                        <div className="row">
                            <div className="title col-xs-4">
                                Gender 
                            </div>
                            <div className="value col-xs-8">
                                {userinfo[this.state.userID].gender}
                            </div>
                        </div>
                        <div className="row">
                            <div className="title col-xs-4">
                                Birthdate 
                            </div>
                            <div className="value col-xs-8">
                                {userinfo[this.state.userID].birthdate}
                            </div>
                        </div>
                        <div className="row">
                            <div className="title col-xs-4">
                            Marital Status 
                            </div>
                            <div className="value col-xs-8">
                                {userinfo[this.state.userID].maritalStatus}
                            </div>
                        </div>
                        <div className="row">
                            <div className="title col-xs-4">
                            location 
                            </div>
                            <div className="value col-xs-8">
                                {userinfo[this.state.userID].location}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="basic-info">
                    <div className="header">
                        WORK
                    </div>
                    <div className="content">
                        <div className="row">
                            <div className="title col-xs-4">
                                Occupation 
                            </div>
                            <div className="value col-xs-8">
                                {userinfo[this.state.userID].occupation}
                            </div>
                        </div>
                        <div className="row">
                            <div className="title col-xs-4">
                                Skills 
                            </div>
                            <div className="value col-xs-8">
                                {userinfo[this.state.userID].skills}
                            </div>
                        </div>
                        <div className="row">
                            <div className="title col-xs-4">
                                jobs 
                            </div>
                            <div className="value col-xs-8">
                                {userinfo[this.state.userID].organization}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}