import React from 'react';
import userinfo from './users';

export default function FriendSection(props){
    let friends = [];
    let friendCount = userinfo[props.userID].friends.length;
    console.log(friendCount);

    let friendElements = userinfo[props.userID].friends.map((friendID) => {
        let friendInfo = userinfo[friendID];
        console.log(friendInfo);

        return(
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                <div className="friend-info">
                    
                    <img src={require("../assets/images/profile-girl.png")} class="friend-profile-pic" alt="Image" />
                    <div className="friend-content">
                        <p className="friend-name">{friendInfo.userName}</p>
                        <p className="work">{friendInfo.work} at {friendInfo.organization}</p>
                    </div>
                </div>
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