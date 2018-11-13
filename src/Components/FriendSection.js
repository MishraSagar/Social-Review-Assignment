import React from 'react';
import userinfo from './users';
import FriendComponent from './FriendComponent';

export default function FriendSection(props){
    let friends = [];
    let friendCount = userinfo[props.userID].friends.length;

    let friendElements = userinfo[props.userID].friends.map((friendID) => {
        let friendInfo = userinfo[friendID];

        return(
            <div className="col-xs-12 col-lg-6" key={"friend-"+friendID}>
                <FriendComponent name={friendInfo.userName} work={friendInfo.work} organization={friendInfo.organization} />
                    {/* <img src={require("../assets/images/profile-girl.png")} class="friend-profile-pic" alt="Image" />
                    <div className="friend-content">
                        <p className="friend-name">{friendInfo.userName}</p>
                        <p className="work">{friendInfo.work} at {friendInfo.organization}</p>
                        <a href="" className="follow-btn">Follow</a>
                    </div> */}
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