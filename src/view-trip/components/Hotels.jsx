import React from "react";
import { Link } from "react-router-dom";
import HotelCardItem from "./HotelCardItem";

const Hotels = ({ trip }) => {
  
  return (
    <div>
      <h2 className="font-bold text-2xl mt-5 mb-5">Hotel Recommendation</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {trip?.tripData?.travelPlan?.hotels?.map((hotel, index) => (
          <div
            key={index}
            className="hover:scale-110 transition-all cursor-pointer"
          >
            <HotelCardItem hotel={hotel} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotels;
