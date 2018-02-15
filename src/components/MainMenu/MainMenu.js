/**
 * Created by supimon on 13/02/18.
 */
import React, { Component } from 'react';
// import classes from './MainMenu.css';
import M from 'materialize-css';

class MainMenu extends Component {

  componentDidMount(){
    M.Sidenav.init(this.sidenav);
  }

  render(){
    const menuItems = this.props.menuItems.map((item, index)=>{
      return (
        <li key={'mainMenuItem'+index}><a href={item.href}>
          {item.isIcon ?
            <i className="material-icons">{item.name}</i> : item.name
          }
        </a></li>
      )
    });

    return (
      <ul className={this.props.classes}
          ref={ (sidenav) => {this.sidenav = sidenav} }
          id={this.props.id}>
        {menuItems}
      </ul>
    );
  }
}

export default MainMenu;