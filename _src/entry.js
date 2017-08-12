import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';

window.callback = (data) => {
  ReactDOM.render(
    <App />, document.getElementById('app')
  );
};
