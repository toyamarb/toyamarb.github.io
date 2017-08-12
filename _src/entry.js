import React from 'react';
import ReactDOM from 'react-dom';
import RecentlyEvents from './RecentlyEvents.jsx';

window.callback = (data) => {
  ReactDOM.render(
    <RecentlyEvents data={data}/>,
    document.getElementById('recently_events')
  );
};
