import { CheckIcon, ExternalLinkIcon } from "@heroicons/react/outline";
import { FormattedDate } from "./FormattedDate";
import { ConnpassEvent } from "./types";

export const RecentlyEvents: React.VFC<{
  events: ConnpassEvent[];
}> = (props) => (
  <section className="mt-8">
    <h2 className="text-[20px] inline-block border-2 rounded-md px-8 text-white bg-gray-400">
      Recently Events
    </h2>

    <div className="ml-2 pt-2">
      {props.events
        ? props.events.map((event, index) => (
            <div key={index} className="mt-2 flex">
              <CheckIcon className="h-5 w-5 mr-1" />
              <span className="mx-1">{event.schedule}</span>
              <span className="flex items-center hover:underline">
                <a href={event.url} target="_blank" rel="noopener noreferrer">
                  {event.title}
                </a>
                <ExternalLinkIcon className="h-4 w-4 ml-1" />
              </span>
            </div>
          ))
        : null}
    </div>
  </section>
);
