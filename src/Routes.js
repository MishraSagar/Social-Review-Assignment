import React from 'react';
import {Route, Switch, Redirect} from 'react-router';
import Timeline from './Components/Timeline';
import About from './Components/About';
import Photos from './Components/Photos';
import FriendSection from './Components/FriendSection';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import Registration from './Components/Registration';

export default (props) => {
    return (
        <div>
            <Switch>
                <Route exact path="/login" render={() => props.isUserLoggedIn ? <Redirect to="/dashboard" /> : <Login userLogin={props.userLogin} />} />
                <Route path="/dashboard/:content" render={() => props.isUserLoggedIn ? <Dashboard usersData={props.usersData} userID={props.userID}/> : <Redirect to="/login" />} />
                <Route path="/registration" render={() => props.isUserLoggedIn ? <Redirect to="/dashboard" /> : <Registration />}/>
                <Route path="/" render={() => props.isUserLoggedIn ? <Redirect to="/dashboard/timeline"/> : <Redirect to="/login"/>}/>
            </Switch>
        </div>
    )
}