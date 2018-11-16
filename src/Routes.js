import React from 'react';
import {Route, Switch} from 'react-router';
import Timeline from './Components/Timeline';
import About from './Components/About';
import posts from './Components/posts';
import Photos from './Components/Photos';
import FriendSection from './Components/FriendSection';

export default (props) => {
    return (
    <Switch>
        <Route exact path="/" render={() => <Timeline userID={0}/>}/>
        <Route path="/timeline" render={() => <Timeline userID={0} />} />
        <Route path="/about" component={About} />
        <Route path="/photos" component={Photos} />
        <Route path="/friends" render={() => <FriendSection userID={0} /> } />
    </Switch>
    );
}