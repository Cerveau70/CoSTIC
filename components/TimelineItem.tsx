import React, { useEffect, useRef, useState } from 'react';
import type { TimelineEvent } from '../types';

interface TimelineItemProps {
  event: TimelineEvent;
  isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ event, isLast = false }) => {
    const [isVisible, setIsVisible] = useState(false);
    const itemRef = useRef<HTMLDivElement>(null);

     useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
            }
        },
        {
            threshold: 0.5, // Trigger when 50% of the item is visible
        }
        );

        if (itemRef.current) {
            observer.observe(itemRef.current);
        }

        return () => {
        if (itemRef.current) {
            observer.unobserve(itemRef.current);
        }
        };
    }, []);


  return (
    <div ref={itemRef} className={`flex items-start pl-10 relative transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
      {/* Connector line */}
      {!isLast && <div className="absolute left-4 top-5 h-full w-px bg-neutral-300" aria-hidden="true"></div>}
      
      {/* Point Marker */}
      <div className={`absolute left-0 top-1 w-8 h-8 rounded-full flex items-center justify-center ring-4 z-10 transition-transform duration-500 ${event.isHighlighted ? 'bg-primary ring-secondary/50' : 'bg-white ring-secondary/30'} ${isVisible ? 'scale-100 animate-pulse' : 'scale-0'}`}>
          <span className={`text-lg ${event.isHighlighted ? 'text-white' : 'text-primary'}`}>{event.icon}</span>
      </div>
      
      {/* Content */}
      <div className={`pl-6 pb-12 w-full`}>
        <div className={`p-5 rounded-lg border-l-4 transition-all duration-300 hover:shadow-xl ${event.isHighlighted ? 'border-primary bg-secondary/10 shadow-lg' : 'border-secondary bg-white shadow-sm'}`}>
          <p className={`mb-1 text-lg font-bold font-sans ${event.isHighlighted ? 'text-primary' : 'text-primary'}`}>{event.date}</p>
          <p className="text-neutral-700">{event.description}</p>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;