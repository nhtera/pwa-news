require('es6-promise').polyfill();

import React from 'react';
import { createHashHistory } from 'history';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'react-dom';
import Routes from './Routes';
import App from './App';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './index.css';

injectTapEventPlugin();

render(
  <Router
    onUpdate={() => window.scrollTo(0, 0)}
  >
    { Routes }
  </Router>
, document.getElementById('root'));
// render(
//   <App />,
//   document.getElementById('root')
// );
