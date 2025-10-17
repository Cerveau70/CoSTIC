import React from 'react';

interface TimelineEvent {
  date: string;
  description: string;
  icon: string;
  isHighlighted?: boolean;
  status?: 'completed' | 'current' | 'upcoming';
}

interface TimelineCalendarProps {
  events: TimelineEvent[];
}

const TimelineCalendar: React.FC<TimelineCalendarProps> = ({ events }) => {
  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'current':
        return 'bg-blue-500';
      case 'upcoming':
        return 'bg-gray-400';
      default:
        return 'bg-gray-400';
    }
  };

  const getStatusText = (status?: string) => {
    switch (status) {
      case 'completed':
        return 'Terminé';
      case 'current':
        return 'En cours';
      case 'upcoming':
        return 'À venir';
      default:
        return 'À venir';
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header avec titre et description */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-primary mb-4 font-sans">
          Calendrier Prévisionnel
        </h2>
        <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
          Suivez les étapes importantes du CoSTIC 2026 et planifiez votre participation
        </p>
      </div>

      {/* Timeline moderne avec cartes */}
      <div className="relative">
        {/* Ligne de connexion verticale */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>

        <div className="space-y-8">
          {events.map((event, index) => (
            <div key={event.date} className="relative flex items-start">
              {/* Point de timeline avec icône */}
              <div className="relative z-10 flex-shrink-0">
                <div className={`w-16 h-16 rounded-full ${getStatusColor(event.status)} flex items-center justify-center shadow-lg border-4 border-white`}>
                  <span className="text-2xl">{event.icon}</span>
                </div>
                {/* Ligne de connexion vers le contenu */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-r from-primary/50 to-transparent"></div>
              </div>

              {/* Carte de contenu */}
              <div className="ml-8 flex-1">
                <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 border-l-4 ${event.isHighlighted ? 'border-accent' : 'border-primary'
                  }`}>
                  {/* En-tête de la carte */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getStatusColor(event.status)}`}>
                        {getStatusText(event.status)}
                      </span>
                      {event.isHighlighted && (
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent text-white">
                          Événement Principal
                        </span>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-neutral-500">Étape {index + 1}</div>
                    </div>
                  </div>

                  {/* Date et description */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-primary font-sans">
                      {event.date}
                    </h3>
                    <p className="text-neutral-700 text-lg leading-relaxed">
                      {event.description}
                    </p>
                  </div>

                  {/* Barre de progression pour l'étape */}
                  <div className="mt-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 bg-neutral-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-500 ${event.status === 'completed' ? 'bg-green-500 w-full' :
                              event.status === 'current' ? 'bg-blue-500 w-3/4' :
                                'bg-gray-400 w-0'
                            }`}
                        ></div>
                      </div>
                      <span className="text-xs text-neutral-500 font-medium">
                        {event.status === 'completed' ? '100%' :
                          event.status === 'current' ? '75%' : '0%'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Légende des statuts */}
      <div className="mt-12 bg-neutral-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-primary mb-4 font-sans">Légende des Statuts</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 rounded-full bg-green-500"></div>
            <span className="text-neutral-700">Terminé</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 rounded-full bg-blue-500"></div>
            <span className="text-neutral-700">En cours</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 rounded-full bg-gray-400"></div>
            <span className="text-neutral-700">À venir</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineCalendar;

