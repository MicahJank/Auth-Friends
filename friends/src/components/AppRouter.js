import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Login from './Login.js';
import 

const AppRouter = () => {

    return (
        <Switch>
            <Route path='/login' component={Login} />
            <Route path='/friends' />
        </Switch>
    );
}

export default AppRouter;