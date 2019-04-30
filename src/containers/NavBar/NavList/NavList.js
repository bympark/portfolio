import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Scrollspy from 'react-scrollspy';
import styles from './NavList.css';

class NavList extends Component {
  render() {
    return(
      <div className='container'>
        <Scrollspy items={['Home', 'About', 'Experience', 'Projects', 'Contact']} currentClassName={styles.currentView}>
          <li><Link smooth to={{hash: "#Home"}}>Home</Link></li>
          <li><Link smooth to={{hash: "#About"}}>About</Link></li>
          <li><Link smooth to={{hash: '#Experience'}}>Experience</Link></li>
          <li><Link smooth to={{hash: '#Projects'}}>Projects</Link></li>
          <li><Link smooth to={{hash: '#Contact'}}>Contact</Link></li>
        </Scrollspy>
      </div>
    )
  }
}

export { NavList };
