import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import Home from './controller/Home';
import NoMatch from './controller/NoMatch';
import Layout from './controller/Layout';

const Routes = (
<Layout>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route component={ NoMatch }/>
    </Switch>
</Layout>
);

export default Routes;