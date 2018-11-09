import React from 'react';
import {Route, Switch} from 'react-router';
import Timeline from './Components/Timeline';
import posts from './Components/posts';

export default (props) => {
    return (
    <Switch>
        <Route path="/" component={Timeline}/>
        <Route path="/timeline" component={Timeline} />
        {/* <Route path="/about" component={About} />
        <Route path="/photos" component={Photos} />
        <Route path="/friends" component={Friends} /> */}
    </Switch>
    );
}