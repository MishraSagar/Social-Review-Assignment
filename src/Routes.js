import React from 'react';
import {Route, Switch, Redirect} from 'react-router';
import Timeline from './Components/Timeline';
import About from './Components/About';
import Photos from './Components/Photos';
import FriendSection from './Components/FriendSection';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';

export default (props) => {
    return (
        <div>
        <Route exact path="/login" render={() => props.isUserLoggedIn ? <Redirect to="/dashboard" /> : <Login userLogin={props.userLogin} />} />
        <Route exact path="/" render={() => props.isUserLoggedIn ? <Redirect to="/dashboard"/> : <Redirect to="/login"/>}/>
        <Route path="/dashboard/:content" render={() => props.isUserLoggedIn ? <Dashboard usersData={props.usersData} userID={props.userID}/> : <Redirect to="/login" />} />
            </div>
    )
}


// export default routes = (
//     <App>
//         <Route exact path="/login" render={() => <Login userLogin={this.userLogin} />} />
//         <Route path="/dashboard" /*render={() => <Redirect to="/profile/timeline"/>}*/ render={() => isUserLoggedIn() ?<Redirect to="/dashboard/timeline" /> : <Redirect to="/login" }>
//             <Route exact path="/dashboard/timeline" render={() => <Timeline userID={userID}/>} />
//             <Route exact path="/dashboard/about" render={() => <About userID={userID} /> } />
//             <Route exact path="/dashboard/photos" render={() => <Photos userID={userID} /> } />
//             <Route exact path="/dashboard/friends" render={() => <FriendSection userID={userID} /> } />
//         </Route>
//     </App>
// );


// function isUserLoggedIn() {
//     if (localStorage.hasOwnProperty("email")) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }