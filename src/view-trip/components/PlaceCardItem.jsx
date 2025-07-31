
import { FaMapLocationDot } from "react-icons/fa6";
import { Button } from "../../components/ui/button";
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GetPlaceDetails, PHOTO_REF_URL } from '../../service/GlobalApi';


const PlaceCardItem = ({ place }) => {

  
         const [photoUrl,setPhotoUrl]=useState();
       
       
           useEffect(()=>{
               place&&GetPlacePhoto();
           },[place])
       
       
           const GetPlacePhoto=async()=>{
               const data={
                   textQuery: place?.placeName
               }
               const result=await GetPlaceDetails(data).then(resp=>{
                  
                   const photoname=resp.data.places[0].photos[6].name
       
                   const PhotoUrl=PHOTO_REF_URL.replace('NAME',photoname)
       
                   setPhotoUrl(PhotoUrl);
               })
           }
   
   


  return (
   <a
      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place?.placeName + "," + place?.placeDetails)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
       <h2>Time to visit: {place?.time}</h2>
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 group-hover:-translate-y-0.5">
          
        <div className="flex gap-5 p-5">
        
          <div className="relative overflow-hidden rounded-xl flex-shrink-0">
            <img
              src={photoUrl || 'public/cat_spin_dribble.gif'}
              alt={place?.placeName}
              className="w-32 h-32 object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
         
          <div className="flex-1 space-y-3">
            <h4 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700 transition-colors line-clamp-2">
              {place?.placeName}
            </h4>
            <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
              {place?.details}
            </p>
            
            <div className="grid grid-cols-2 gap-3 pt-3">
              <div className="flex items-center gap-2">
               ⌚
                <span className="text-xs font-medium text-gray-700">{place?.travelTime}</span>
              </div>
              <div className="flex items-center gap-2">
                ⭐
                <span className="text-xs font-medium text-gray-700">{place?.rating}</span>
              </div>
              <div className="flex items-center gap-2 col-span-2">
                💵
                <span className="text-xs font-medium text-gray-700">{place?.ticketPrice}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
    
  );
};

export default PlaceCardItem;
