import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//pages
import Landing from './pages/landing';
import Homepage from './pages/homepage';
// ---------

function Routes(){
    return(
        <>
            <BrowserRouter>
                <Switch>
                    <Route path = "/" exact component = { Landing } />
                    <Route path = "/homepage" component = { Homepage } />
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default Routes;