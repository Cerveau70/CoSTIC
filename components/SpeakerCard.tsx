import React from 'react';
import type { Speaker } from '../types';

interface SpeakerCardProps {
  speaker: Speaker;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ speaker }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
      <img src={speaker.imageUrl} alt={`Photo de ${speaker.name}`} className="w-full h-56 object-cover" />
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-primary font-sans">{speaker.name}</h3>
        <p className="text-secondary font-semibold text-sm mb-2">{speaker.title}</p>
        <p className="text-neutral-600 text-sm flex-grow font-body">{speaker.bio}</p>
      </div>
    </div>
  );
};

export default SpeakerCard;