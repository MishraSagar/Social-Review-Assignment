import React from 'react';
import userinfo from '../JSONs/users';

export default function Following(props) {
    let list = [];

    list = props.following.map((id) => {
        return (
            <div className="following-info" key={id}>               
                <img src={require("../assets/images/avatar-1.png")} className="following-img" alt="Image" />
                <div className="follower-info">
                    <div className="follower-name">{userinfo[id].userName}</div>
                    <div className="follower-work">{userinfo[id].work}</div>
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