require('es6-promise').polyfill();
const runtime = require('offline-plugin/runtime');
import 'whatwg-fetch';
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'react-dom';
import Routes from './Routes';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './index.css';
import { isFirstRun, setAsRun } from "./utils/storageUtil";

if (isFirstRun) {
  setAsRun();
}

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

runtime.install({
  onUpdateReady: () => {
    // Tells to new SW to take control immediately
    runtime.applyUpdate();
  },
  onUpdated: () => {
    // Reload the webpage to load into the new version
    window.location.reload();
  },
});