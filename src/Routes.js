import React from 'react';
import {Route, Switch, Redirect} from 'react-router';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import Registration from './Components/Registration';
import Charts from './Components/Charts';
import MapContainer from './Components/MapContainer';

export default (props) => {
    return (
        <div>
            <Switch>
                <Route exact path="/login" render={() => props.isUserLoggedIn ? <Redirect to="/dashboard" /> : <Login userLogin={props.userLogin} />} />
                <Route exact path="/charts" render={() => props.isUserLoggedIn ? <Redirect to="/charts/bar" /> : <Redirect to="/login" />} />
                <Route exact path="/map" render={() => props.isUserLoggedIn ? <MapContainer /> : <Redirect to="/login" />} />
                <Route path="/charts/:content" render={() => props.isUserLoggedIn ? <Charts /> : <Redirect to="/login" />} />
                <Route path="/dashboard/:content" render={() => props.isUserLoggedIn ? <Dashboard usersData={props.usersData} userID={props.userID}/> : <Redirect to="/login" />} />
                <Route path="/registration" render={() => props.isUserLoggedIn ? <Redirect to="/dashboard" /> : <Registration userLogin={props.userLogin}/>}/>
                <Route path="/" render={() => props.isUserLoggedIn ? <Redirect to="/dashboard/timeline"/> : <Redirect to="/login"/>}/>
            </Switch>
        </div>
    )
}