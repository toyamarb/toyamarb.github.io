import React from 'react';
import moment from 'moment';

export default class RecentlyEvents extends React.Component {

  formatDate(dateString) {
    return moment(dateString).format('YYYY/MM/DD');
  }

  render() {
    return (
      <ul>
        {
          this.props.data.events.map((event, index) => (
            <li key={index}>
              <a target="_blank" href={event.event_url}>
                {this.formatDate(event.started_at)}: {event.title}
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
