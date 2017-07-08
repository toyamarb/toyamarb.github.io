const $callbackDefer = $.Deferred();
const $loadDefer = $.Deferred();

window.callback = (data) => {
  $loadDefer.done(() => {
    $callbackDefer.resolve(data);
  });
};

$(() => $loadDefer.resolve());

$callbackDefer.done((data) => {
  console.log(data)
  const nextEvent = data && data.events && data.events[0];
  if (!nextEvent) return;
  const compiled = _.template($('#next_template').html());
  $('#next').html(compiled({
    date: nextEvent.started_at,
    started_at: moment(nextEvent.started_at).format('YYYY/MM/DD HH:mm'),
    ended_at: moment(nextEvent.ended_at).format('HH:mm'),
    place: nextEvent.place
  }));
});
