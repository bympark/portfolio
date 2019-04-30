import React, { Component } from 'react';
import styles from './NavHeader.css';
import profilePic from '../../../imgs/profilePic.jpg';

class NavHeader extends Component {
  render() {
    return (
      <div className={styles.NavHeader}>
        <img src={profilePic}/>
        <div className={styles.name}>
          Brian Park
        </div>
        <div>
          Software Developer
        </div>
      </div>
    )
  }
}

export { NavHeader };
