import React from 'react';

import HomePage from '../HomePage';
import Dashboard from '../Dashboard';
import Login from '../Login';
import Register from '../Register';

import {MuiThemeProvider,createMuiTheme} from '@material-ui/core/styles';
import {CssBaseline} from '@material-ui/core';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

const tema=createMuiTheme();

export default function App(){
    return(
        <MuiThemeProvider thema={tema}>
            <CssBaseline/>
            <Router>
                <Switch>
                    <Route  exact path='/' component={HomePage} />
                    <Route  exact path='/login' component={Login} />
                    <Route  exact path='/register' component={Register} />
                    <Route  exact path='/dashboard' component={Dashboard} />
                </Switch>
            </Router>
        </MuiThemeProvider>
    )
}
