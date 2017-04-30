import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import ReactNews from './controller/ReactNews';
import logo from './logo.svg';
import './App.css';

require('./controller/HNStory');

class App extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
          </p>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
