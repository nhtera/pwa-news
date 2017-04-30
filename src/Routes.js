import React from 'react';
import {
  Route,
} from 'react-router-dom';
import Home from './controller/Home';

const Routes = (
    <Route exact path="/" component={Home}/>
);

export default Routes;