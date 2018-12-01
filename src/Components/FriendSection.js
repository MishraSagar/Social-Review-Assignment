import React from 'react';
import FriendComponent from './FriendComponent';

export default function FriendSection(props){
    let userinfo = JSON.parse(localStorage.getItem("users"));
    let following = [];
    let friendElements = userinfo[props.userID].friends.map((friendID) => {
        let friendInfo = userinfo[friendID];

        return (
            <div className="col-xs-12 col-md-6 col-lg-6" key={"friend-" + friendID}>
                <FriendComponent userID={props.userID} friendID={friendID} name={friendInfo.userName} work={friendInfo.work} organization={friendInfo.organization} />
            </div>
        );
    });
    return (
        <div className="friends">
            <div className="row">
                {friendElements}
            </div>
        </div>
    );

}