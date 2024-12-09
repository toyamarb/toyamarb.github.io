import { useEffect, useState } from "react";
import { NextEvent } from "./NextEvent";
import { RecentlyEvents } from "./RecentlyEvents";
import { ConnpassEvent } from "./types";

export const Events: React.VFC = () => {
  const [nextEvent, setNextEvent] = useState<ConnpassEvent | null>(null);
  const [recentlyEvents, setRecentlyEvents] = useState<ConnpassEvent[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("https://feed-api.mugi-uno.workers.dev/feed");
      const [nextEvent, ...recenctlyEvents] = await res.json();
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
