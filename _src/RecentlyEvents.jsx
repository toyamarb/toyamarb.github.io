import React from 'react';

export default class RecentlyEvents extends React.Component {
  render() {
    return (
      <ul>
        {
          this.props.data.events.map((event, index) => (
            <li key={index}>
              <a target="_blank" href={event.event_url}>
                {event.started_at}: {event.title}
                <span className="icon is-small">
                  <i className="fa fa-external-link"></i>
                </span>
              </a>
            </li>
          ))
        }
      </ul>
    );
  }
}
