import React from 'react';
import PropTypes from 'prop-types';
import styles from './Logins.module.css';

const Logins = () => (
  <div className={styles.Logins}>
    <div className="container">
      <input type="text" id="usrName"/>
      
    </div>
  </div>
);

Logins.propTypes = {};

Logins.defaultProps = {};

export default Logins;
