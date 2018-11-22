import React from 'react';
import userinfo from '../JSONs/users';
import FriendComponent from './FriendComponent';

export default function FriendSection(props){
    let following = [];
    let friendElements = userinfo[props.userID].friends.map((friendID, index) => {
        let friendInfo = userinfo[friendID];
        let isFollowing = false;

        return(
            <div className="col-xs-12 col-md-6 col-lg-6" key={"friend-"+friendID}>
                <FriendComponent index={index} isFollowing={isFollowing} friendID={friendID} name={friendInfo.userName} work={friendInfo.work} organization={friendInfo.organization} />
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