import React, { Component } from 'react';
import { reactNews } from './fetch';
import ListNews from './components/ListNews';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      news: []
    };
  }

  componentWillMount() {
    console.log(reactNews);
    reactNews().then(res => {
      this.setState({news: res});
    });
  }

  render() {
    const { news } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <ListNews news={news}/>
        </p>
      </div>
    );
  }
}

export default App;
