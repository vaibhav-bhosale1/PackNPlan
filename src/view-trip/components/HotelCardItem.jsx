import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GetPlaceDetails, PHOTO_REF_URL } from '../../service/GlobalApi';

const HotelCardItem = ({hotel}) => {
      const [photoUrl,setPhotoUrl]=useState();
    
    
        useEffect(()=>{
            hotel&&GetPlacePhoto();
        },[hotel])
    
    
        const GetPlacePhoto=async()=>{
            const data={
                textQuery:hotel?.hotelName
            }
            const result=await GetPlaceDetails(data).then(resp=>{
               
                const photoname=resp.data.places[0].photos[3].name
    
                const PhotoUrl=PHOTO_REF_URL.replace('NAME',photoname)
    
                setPhotoUrl(PhotoUrl);
            })
        }


  return (
    
    <a 
      href={`https://www.google.com/maps/search/?api=1&query=${hotel?.hotelName},${hotel?.hotelAddress}`} 
      target='_blank'
      className="group block"
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 group-hover:-translate-y-1">
        <div className="relative overflow-hidden">
          <img  
            src={photoUrl || '/api/placeholder/300/200'} 
            alt={hotel?.hotelName}
            className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500'
          />
        </div>

        <div className="p-5 space-y-3">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700 transition-colors line-clamp-2">
            {hotel?.hotelName}
          </h3>
          
          <div className="flex items-start gap-2 text-gray-600">
            📌
            <span className="text-sm line-clamp-2">{hotel?.address}</span>
          </div>
          
          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <div className="flex items-center gap-2">
            ⭐
              <span className="font-medium text-gray-800">{hotel?.rating}</span>
            </div>
            <div className="text-right">
               
              <div className="font-semibold text-gray-900"> 💵 {hotel?.price}</div>
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}

export default HotelCardItem