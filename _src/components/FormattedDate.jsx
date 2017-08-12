import React from 'react';
import moment from 'moment';

function formatDate(dateString, format = 'YYYY/MM/DD') {
  return moment(dateString).format(format);
}

export const DateComponent = ({dateString}) => (
  <span>{formatDate(dateString)}</span>
);

export const DateTimeComponent = ({dateString}) => (
  <span>{formatDate(dateString, 'YYYY/MM/DD HH:mm')}</span>
);

export const TimeComponent = ({dateString}) => (
  <span>{formatDate(dateString, 'HH:mm')}</span>
);
