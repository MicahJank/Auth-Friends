import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Login from './Login.js';

const AppRouter = () => {

    return (
        <Switch>
            <Route path='/login' component={Login} />
        </Switch>
    );
}

export default AppRouter;