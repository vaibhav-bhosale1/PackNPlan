import React from 'react'
import PlaceCardItem from './PlaceCardItem'
import { Navigation  } from 'lucide-react';

const PlacesToVisit = ({trip}) => {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
          <Navigation className="w-5 h-5 text-gray-700" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900">Places To Visit</h2>
      </div>

      <div className="space-y-10">
        {trip?.tripData?.travelPlan?.itinerary?.map((dayPlan, index) => (
          <div key={index} className="relative">
            {/* Day Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center">
                <span className="text-white font-semibold">{dayPlan?.day}</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Day {dayPlan?.day}</h3>
                <p className="text-gray-600 text-sm">Explore amazing destinations</p>
               
              </div>
            </div>

            {/* Places Grid */}
            <div className="grid md:grid-cols-2 gap-5 ml-8">
              {dayPlan?.plan?.map((place, placeIndex) => (
                <PlaceCardItem key={placeIndex} place={place} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PlacesToVisit