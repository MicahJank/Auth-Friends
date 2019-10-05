import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Login from './Login.js';
import FriendsList from './FriendsList.js';

const AppRouter = () => {

    return (
        <Switch>
            <Route path='/login' component={Login} />
            <Route path='/friends' component={FriendsList} />
        </Switch>
    );
}

export default AppRouter;