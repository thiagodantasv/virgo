import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//pages
import Landing from './pages/landing';
import Homepage from './pages/homepage';
import Signup from './pages/signup';
// ---------

function Routes(){
    return(
        <>
            <BrowserRouter>
                <Switch>
                    <Route path = "/" exact component = { Landing } />
                    <Route path = "/homepage" component = { Homepage } />
                    <Route path = "/signup" component = {Signup} />
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default Routes;