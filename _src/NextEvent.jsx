import React from 'react';
import moment from 'moment';

export default class NextEvent extends React.Component {

  formatDate(dateString) {
    return moment(dateString).format('YYYY/MM/DD');
  }

  render() {
    const event = this.props.data.events[0];

    return (
      <h2 id="next" className="subtitle has-text-centered">
        <a target="_blank" href={event.event_url}>
          {event.title}
          <span className="icon is-small">
            <i className="fa fa-external-link"></i>
          </span>
        </a>
        <br />
        <span className="next-time">
          <span className="icon is-small">
            <i className="fa fa-calendar"></i>
          </span>
          {event.started_at}-{event.ended_at}<br />
        </span>
        <span className="place">
          <span className="icon is-small">
            <i className="fa fa-map-marker"></i>
          </span>
          {event.place}
          <br />
        </span>
      </h2>
    );
  }
}
