require('es6-promise').polyfill();

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'react-dom';
import Routes from './Routes';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './index.css';

injectTapEventPlugin();

render(
  <Router
    onUpdate={() => window.scrollTo(0, 0)}
  >
    <MuiThemeProvider>
      { Routes }
    </MuiThemeProvider>
  </Router>
, document.getElementById('root'));
