import React from 'react';
import ReactDOM from 'react-dom';
import NextEvent from './NextEvent.jsx';
import RecentlyEvents from './RecentlyEvents.jsx';
import registerServiceWorker from './serviceWorker/register';

window.callback = (data) => {
  ReactDOM.render(
    <NextEvent data={data}/>,
    document.getElementById('next_event')
  );
  ReactDOM.render(
    <RecentlyEvents data={data}/>,
    document.getElementById('recently_events')
  );
};

registerServiceWorker();
