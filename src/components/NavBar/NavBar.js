/**
 * Created by supimon on 13/02/18.
 */
import React, { Fragment } from 'react';
// import classes from './NavBar.css';
import MainMenu from '../MainMenu/MainMenu';

const navBar = props => {
  // is mobile menu required ?
  let mobileMenu = '';
  if(props.responsive){
    mobileMenu = (
      <a href="#!" data-target="mobile-main-menu" className="sidenav-trigger">
        <i className="material-icons">menu</i>
      </a>
    )
  }

  return (
    <Fragment>
      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo">RApp</a>
          { mobileMenu }
          <MainMenu classes="right hide-on-med-and-down" menuItems={props.menuItems}/>
        </div>
      </nav>
      { mobileMenu ? <MainMenu classes="sidenav" id="mobile-main-menu" menuItems={props.menuItems}/> : '' }
    </Fragment>
  );

}

export default navBar;