import React, { Component } from 'react';
import {BrowserRouter, Switch} from 'react-router-dom';
import Header from './Header';
import avatar from '../assets/images/avatar-1.png'
import Cover from './Cover';
import Profile from './Profile';
import userinfo from './users'


class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header userName="John Doe" userImage={avatar}/>
                    <div className="container-fluid main-container">
                        <div className="profile-heading">
                          Social Profile
                        </div>
                        <Cover />

                        <div className="main-content">
                            <div className="row">
                                <div className="profile-content col-xs-12 col-sm-4 col-md-3 col-lg-3">
                                    <Profile {...userinfo} userID={0}/>
                                </div>

                                <div className="about-container col-xs-12 col-sm-8 col-md-9 col-lg-9">
                                    <div className="row">
                                        <div className="about-content">
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
