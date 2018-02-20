import React, { Component } from 'react';
import './App.css';
import Layout from '../Layout/Layout';
import Reboot from 'material-ui/Reboot';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Reboot />
        <Layout />
      </div>
    );
  }
}

export default App;
