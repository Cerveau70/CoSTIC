import React from "react";
import { TimelineEvent } from "../types";

interface AdvancedCalendarProps {
  events: TimelineEvent[];
}

// Compact calendar: date badge + concise description
const AdvancedCalendar: React.FC<AdvancedCalendarProps> = ({ events }) => {
  return (
    <div className="max-w-4xl mx-auto">

      <ul className="divide-y divide-neutral-200 rounded-xl overflow-hidden border border-neutral-200 bg-white">
        {events.map((event) => {
          const parts = event.date.split(" ");
          const first = parts[0] || event.date;
          const second = parts[1] || "";
          return (
            <li key={event.date} className="flex items-start gap-4 p-3 md:p-4">
              {/* Date badge */}
              <div className="shrink-0 w-28 md:w-32">
                <div className="rounded-lg border border-costic-blue/20 bg-pure-white px-3 py-2 text-center shadow-sm">
                  <div className="text-xs font-semibold text-costic-blue uppercase tracking-wide">{second}</div>
                  <div className="text-lg md:text-xl font-extrabold text-costic-blue leading-tight">{first}</div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm md:text-base font-semibold text-neutral-800 font-sans truncate">{event.description}</h3>
                  {event.isHighlighted && (
                    <span className="text-[10px] md:text-xs px-2 py-0.5 rounded-full bg-accent text-white font-semibold whitespace-nowrap">Événement principal</span>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AdvancedCalendar;
