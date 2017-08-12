import React from 'react';
import moment from 'moment';
import { DateComponent } from './components/FormattedDate.jsx';

const RecentlyEvent = ({event_url, title, started_at}) => (
  <li>
    <a target="_blank" href={event_url}>
      <DateComponent dateString={started_at} />: {title}
      <span className="icon is-small">
        <i className="fa fa-external-link"></i>
      </span>
    </a>
  </li>
);

export default class RecentlyEvents extends React.Component {
  render() {
    return (
      <ul className="trb-list events">
        {
          this.props.data.events.map((event, index) => (
            <RecentlyEvent key={event.event_id} {...event}/>
          ))
        }
      </ul>
    );
  }
}
