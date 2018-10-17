/**
*
* LinkForm
*
*/

import React from 'react';
import TextInput from '../TextInput';

import styles from './styles.css';

class LinkForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {}

  render() {
    return (
      <div className={styles.overlay}>
        <div className={styles.linkForm}>
          <div className={styles.heading}>
            Add a link
          </div>
          <TextInput placeholder="URL" className={styles.input} />
          <TextInput placeholder="Description" className={styles.input} />
            
          <div className={styles.actionContainer}>
            <div className={styles.button} onClick={this.props.cancelLogin}>Cancel</div>
            <div className={styles.button} onClick={this.login}>Login</div>
          </div>
        </div>
      </div>
    );
  }
}

export default LinkForm;
