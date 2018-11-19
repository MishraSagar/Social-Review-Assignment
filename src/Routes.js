import React from 'react';
import {Route, Switch} from 'react-router';
import Timeline from './Components/Timeline';
import About from './Components/About';
import Photos from './Components/Photos';
import FriendSection from './Components/FriendSection';

export default (props) => {
    let userID= JSON.parse(localStorage.getItem("email"));
    return (
    <Switch>
        <Route exact path="/" render={() => <Timeline userID={userID}/>}/>
        <Route exact path="/timeline" render={() => <Timeline userID={userID}/>} />
        <Route exact path="/about" render={() => <About userID={userID} /> } />
        <Route exact path="/photos" render={() => <Photos userID={userID} /> } />
        <Route exact path="/friends" render={() => <FriendSection userID={userID} /> } />
    </Switch>
    );
}