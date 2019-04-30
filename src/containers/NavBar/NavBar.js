import React, { Component } from 'react';
import { NavHeader } from './NavHeader';
import { NavList } from './NavList';
import styles from './NavBar.css';

class NavBar extends Component {
  render() {
    return(
      <div className={ styles.container }>
        <NavHeader/>
        <NavList/>
      </div>
    )
  }
}

export { NavBar };
