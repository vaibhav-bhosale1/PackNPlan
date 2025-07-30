import React from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { Button } from "../../components/ui/button";
import { Link } from "lucide-react";

const PlaceCardItem = ({ place }) => {
  return (
    <a
      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        place?.placeName + "," + place?.placeDetails
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div className="shadow-md border-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all cursor-pointer">
        <img
          src="/vite.svg"
          alt={place?.placeName}
          className="w-[130px] h-100 rounded-xl"
        />
        <div>
          <h2 className="font-bold text-lg">{place?.placeName}</h2>
          <p className="text-gray-400 text-sm">{place?.placeDetails}</p>
          <h2 className="mt-2">⌚ {place?.travelTime}</h2>
          <h2>⭐ {place?.rating}</h2>
          <h2>💵 {place?.ticketPricing}</h2>
        </div>
      </div>
    </a>
  );
};

export default PlaceCardItem;
