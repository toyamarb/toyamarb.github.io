import fetchJsonp from "fetch-jsonp";
import { useEffect, useState } from "react";
import { NextEvent } from "./NextEvent";
import { RecentlyEvents } from "./RecentlyEvents";
import { ConnpassEvent } from "./types";

export const Events: React.VFC = () => {
  const [nextEvent, setNextEvent] = useState<ConnpassEvent | null>(null);
  const [recentlyEvents, setRecentlyEvents] = useState<ConnpassEvent[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetchJsonp(
        "https://connpass.com/api/v1/event/?series_id=2557&order=3&count=4"
      );

      const json = await res.json();

      const [nextEvent, ...recenctlyEvents] = json.events;

      setNextEvent(nextEvent);
      setRecentlyEvents(recenctlyEvents);
    })();
  }, []);

  return (
    <>
      <NextEvent event={nextEvent} />
      <RecentlyEvents events={recentlyEvents} />
    </>
  );
};
