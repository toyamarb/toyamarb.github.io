const $callbackDefer = $.Deferred();
const $loadDefer = $.Deferred();

window.callback = (data) => {
  $loadDefer.done(() => {
    $callbackDefer.resolve(data);
  });
};

$(() => $loadDefer.resolve());

$callbackDefer.done((data) => {
  const nextEvent = data && data.events && data.events[0];
  if (!nextEvent) return;

  $('#next').html(_.template($('#next_template').html())({
    title: nextEvent.title,
    date: nextEvent.started_at,
    started_at: moment(nextEvent.started_at).format('YYYY/MM/DD HH:mm'),
    ended_at: moment(nextEvent.ended_at).format('HH:mm'),
    place: nextEvent.place,
    event_url: nextEvent.event_url
  }));

  const events = data.events.map(event => ({
    title: event.title,
    date: moment(event.started_at).format('YYYY/MM/DD'),
    event_url: event.event_url
  }))

  $('#recentry_events').html(_.template($('#recentry_events_template').html())({
    events: events
  }));
});
