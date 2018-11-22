import React from 'react';
import userinfo from '../JSONs/users';
import FriendComponent from './FriendComponent';

export default function FriendSection(props){
    let following = [];
    let friendElements = userinfo[props.userID].friends.map((friendID) => {
        let friendInfo = userinfo[friendID];

        return (
            <div className="col-xs-12 col-md-6 col-lg-6" key={"friend-" + friendID}>
                <FriendComponent friendID={friendID} name={friendInfo.userName} work={friendInfo.work} organization={friendInfo.organization} />
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