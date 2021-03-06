/**
*
* AppBar
*
*/

import React from 'react';
import { Link } from 'react-router';
import IconButton from '../IconButton';

import styles from './styles.css';

function AppBar({ toggleDrawer, email }) {
  const loginLink = email || (<Link to="/login">login</Link>);
  return (
    <div className={styles.appBar}>
      <IconButton
        onClick={toggleDrawer}
        icon="bars"
        buttonClass={styles.iconButton}
        iconClass={styles.icon}
      />
      <div className={styles.heading}>
        Coder daily
      </div>
      <div className={styles.linkContainer}>
        {loginLink}
      </div>
    </div>
  );
}

AppBar.propTypes = {
  email: React.PropTypes.string,
  toggleDrawer: React.PropTypes.func.isRequired,
};

export default AppBar;
