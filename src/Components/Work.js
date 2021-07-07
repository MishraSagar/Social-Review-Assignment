import React from 'react';

export default function Work(props) {
    let userinfo;

    if (localStorage.hasOwnProperty(props.userID)) {
        userinfo = JSON.parse(localStorage.getItem(props.userID));
    }
    else {
        alert("error");
    }

    let infoList = [
        {
            label: 'Occupation',
            value: userinfo.occupation
        },
        {
            label: 'Designation',
            value: userinfo.designation
        },
        {
            label: 'Skills',
            value: userinfo.skills
        },
        {
            label: 'Jobs',
            value: userinfo.organization
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