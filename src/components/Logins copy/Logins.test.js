import React from 'react';
import ReactDOM from 'react-dom';
import Logins from './Logins';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Logins />, div);
  ReactDOM.unmountComponentAtNode(div);
});