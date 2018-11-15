import React from 'react';

export default function BasicInfo(props) {
    let userinfo;

    if (localStorage.hasOwnProperty('user-'+props.userID)) {
        userinfo = JSON.parse(localStorage.getItem('user-'+props.userID));
    }
    else {
        alert("error");
    }
    return (
        <div className="content">
            <div className="row">
                <div className="title col-xs-4">
                    Full Name 
                </div>
                <div className="value col-xs-8">
                    {userinfo.userName}
                </div>
            </div>
            <div className="row">
                <div className="title col-xs-4">
                    Gender 
                </div>
                <div className="value col-xs-8">
                    {userinfo.gender}
                </div>
            </div>
            <div className="row">
                <div className="title col-xs-4">
                    Birthdate 
                </div>
                <div className="value col-xs-8">
                    {userinfo.birthdate}
                </div>
            </div>
            <div className="row">
                <div className="title col-xs-4">
                Marital Status 
                </div>
                <div className="value col-xs-8">
                    {userinfo.maritalStatus}                        
                </div>
            </div>
            <div className="row">
                <div className="title col-xs-4">
                location 
                </div>
                <div className="value col-xs-8">
                    {userinfo.location}
                </div>
            </div>
        </div>
        );
}