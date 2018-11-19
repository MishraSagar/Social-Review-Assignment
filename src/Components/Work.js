import React from 'react';

export default function Work(props) {
    let userinfo;

    if (localStorage.hasOwnProperty(props.userID)) {
        userinfo = JSON.parse(localStorage.getItem(props.userID));
    }
    else {
        alert("error");
    }
    return (
        <div className="content">
            <div className="row">
                <div className="title col-xs-4">
                    Occupation 
                </div>
                <div className="value col-xs-8">
                    {userinfo.occupation}
                </div>
            </div>
            <div className="row">
                <div className="title col-xs-4">
                    Skills 
                </div>
                <div className="value col-xs-8">
                    {userinfo.skills}
                </div>
            </div>
            <div className="row">
                <div className="title col-xs-4">
                    Jobs 
                </div>
                <div className="value col-xs-8">
                    {userinfo.organization}
                </div>
            </div>
        </div>
    );
}