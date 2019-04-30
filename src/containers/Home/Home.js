import React, { Component } from 'react';
import styles from './Home.css';

class Home extends Component {
  render() {
    return(
      <div>
        <div className={styles.section} id='Home'>Home</div>
        <div className={styles.section} id='About'>About</div>
        <div className={styles.section} id='Experience'>Experience</div>
        <div className={styles.section} id='Projects'>Projects</div>
        <div className={styles.section} id='Contact'>Contact</div>
      </div>
    )
  }
}

export { Home };
