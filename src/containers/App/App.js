import React, { Component } from 'react';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';

class App extends Component {
  state = {
    menus : [
      { name: "Tables", isIcon: false },
      { name: "Orders", isIcon: false },
      { name: "settings", isIcon: true },
      { name: "help", isIcon: true }
    ]
  }

  render() {
    return (
      <div className="App">
        <NavBar responsive={true} menuItems={this.state.menus}/>
      </div>
    );
  }
}

export default App;
