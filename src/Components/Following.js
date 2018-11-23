import React from 'react';

export default function Following(props) {
    let list = [];

    list = props.following.map((id) => {
        return (
            <div className="following-info" key={id}>               
                <img src={require("../assets/images/avatar-1.png")} className="following-img" alt="Image" />
                <div className="follower-info">
                    <div className="follower-name">{props.users[id].userName}</div>
                    <div className="follower-work">{props.users[id].work}</div>
                </div>
            </div>
        );
    });

    return(
        <div className="following">
            <div className="following-header">
                WHO TO FOLLOW
            </div>
            <div className="following-content">
            {list}
            </div>
        </div>
    );
}