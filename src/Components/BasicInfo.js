import React from 'react';

export default function BasicInfo(props) {
    let userinfo;

    if (localStorage.hasOwnProperty(props.userID)) {
        userinfo = JSON.parse(localStorage.getItem(props.userID));
    }
    else {
        alert("error");
    }

    let infoList = [
        {
            label: 'Full Name',
            value: userinfo.userName
        },
        {
            label: 'Gender',
            value: userinfo.gender
        },
        {
            label: 'Date of Birth',
            value: (new Date(userinfo.birthdate)).toDateString()
        },
        {
            label: 'Marital Status',
            value: userinfo.maritalStatus
        },
        {
            label: 'location',
            value: userinfo.location
        }
    ];

    let infoElements = infoList.map((obj, index) => {
        return (
            <div className="row" key={`info ${obj.label}`}>
                <div className="title col-xs-4">
                    {obj.label} 
                </div>
                <div className="value col-xs-8">
                    {obj.value}
                </div>
            </div>
        );
    });
    
    return (
        <div className="content">
            {infoElements}
        </div>
    );
}