import { FormattedDate, FormattedHour } from "./FormattedDate";
import { ConnpassEvent } from "./types";
import {
  LocationMarkerIcon,
  CalendarIcon,
  ExternalLinkIcon,
} from "@heroicons/react/outline";

export const NextEvent: React.VFC<{
  event: ConnpassEvent | null;
}> = (props) => {
  const { event } = props;

  return (
    <section className="mt-8">
      <>
        <h2 className="text-[20px] inline-block border-2 rounded-md px-8 text-white bg-red-400 mb-2">
          Next Event
        </h2>
        <div className="pl-2">
          <span className="text-[20px] mb-2 hover:underline flex items-center">
            {event ? (
              <>
                <a href={event.url} target="_blank" rel="noopener noreferrer">
                  {event.title}
                </a>
                <ExternalLinkIcon className="h-5 w-5 ml-1" />
              </>
            ) : null}
          </span>
          <p className="flex items-center mb-2">
            <CalendarIcon className="h-5 w-5 mr-1" />
            {event ? (
              <>
                <span className="mr-1">{event.schedule}</span>
              </>
            ) : null}
          </p>
          <p className="flex items-center">
            <LocationMarkerIcon className="h-5 w-5 mr-1" />
            {event ? event.place : null}
          </p>
        </div>
      </>
    </section>
  );
};
