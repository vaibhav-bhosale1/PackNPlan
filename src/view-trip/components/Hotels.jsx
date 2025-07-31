import React from "react";
import { Link } from "react-router-dom";
import HotelCardItem from "./HotelCardItem";
import { Hotel } from "lucide-react";

const Hotels = ({ trip }) => {
  
  return (
   <div className="mb-16">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
          <Hotel className="w-5 h-5 text-gray-700" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900">Hotel Recommendations</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
        {trip?.tripData?.travelPlan?.hotels?.map((hotel, index) => (
          <HotelCardItem key={index} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

export default Hotels;
