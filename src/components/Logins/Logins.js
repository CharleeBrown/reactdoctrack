import React from 'react';
import PropTypes from 'prop-types';
import styles from './Logins.module.css';

const Logins = () => (
  <div className={styles.Logins}>

<div className="container">
  <h2>Modal Example
    {/* Trigger the modal with a button */}
    <button className="btn btn-info btn-lg" type="button" data-toggle="modal" data-target="#myModal">Open Modal</button>
    {/* //Modal */}
    <div className="modal fade" id="myModal" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button className="close" type="button" data-dismiss="modal" aria-label="Close">&times;</button>
            <h4 className="modal-title">Modal Header</h4>
          </div>
          <div className="modal-body">
            <p>Some text in the modal.</p>
            <form>
              <label htmlFor="txt">Test Form</label>
              <input type="text" name="txt"/>
            </form>
          </div>
          <div className="modal-footer">
            <button className="btn btn-default" type="button" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </h2>
</div>
    Logins Component
  </div>
);

Logins.propTypes = {};

Logins.defaultProps = {};

export default Logins;
