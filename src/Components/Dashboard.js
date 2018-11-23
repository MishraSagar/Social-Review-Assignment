import React from 'react';
import {withRouter} from 'react-router-dom'
import Profile from './Profile';
import Cover from './Cover';
import Timeline from './Timeline';
import About from './About';
import FriendSection from './FriendSection';
import Photos from './Photos';

function Dashboard(props) {
    return (
        <div>
        <div className="container-fluid main-container">
            <div className="profile-heading">
            Social Profile
            </div>
            <Cover />

            <div className="main-content">
                <div className="row">
                    <div className="about-container col-sm-8 col-sm-push-4 col-md-9 col-md-push-3">
                        <div className="row">
                            <div className="about-content">
                                {props.children}
                            </div>
                        </div>
                    </div>

                    <div className="profile-content col-sm-4 col-sm-pull-8 col-md-3 col-md-pull-9">
                        <Profile {...props.usersData} userID={props.userID}/>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    );
}

export default withRouter(Dashboard);