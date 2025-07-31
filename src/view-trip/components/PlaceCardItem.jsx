
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
                  
                   const photoname=resp.data.places[0].photos[3].name
       
                   const PhotoUrl=PHOTO_REF_URL.replace('NAME',photoname)
       
                   setPhotoUrl(PhotoUrl);
               })
           }
   
   


  return (
    <a
      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        place?.placeName + "," + place?.placeDetails
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div className="shadow-md border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all cursor-pointer">
        <img
          src={photoUrl?photoUrl:'/vite.svg'}
          alt={place?.placeName}
          className="w-[130px] h-[130px] rounded-xl object-cover"
        />
        <div>
          <h2 className="font-bold text-lg">{place?.placeName}</h2>
          <p className="text-gray-400 text-sm">{place?.placeDetails}</p>
          <h2 className="mt-2">⌚ {place?.timeToTravel}</h2>
          <h2>⭐ {place?.rating}</h2>
          <h2>💵 {place?.ticketPricing}</h2>
        </div>
      </div>
    </a>
  );
};

export default PlaceCardItem;
