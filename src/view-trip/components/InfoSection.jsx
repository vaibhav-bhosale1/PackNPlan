import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { BsFillSendFill } from "react-icons/bs";
import { GetPlaceDetails, PHOTO_REF_URL } from '../../service/GlobalApi';

import { Calendar, DollarSign, Users, Sun, Send, Share } from 'lucide-react';


const InfoSection = ({trip}) => {
    const [photoUrl,setPhotoUrl]=useState();


    useEffect(()=>{
        trip&&GetPlacePhoto();
    },[trip])



    const GetPlacePhoto=async()=>{
        const data={
            textQuery:trip?.userSelection?.location?.label
        }
        const result=await GetPlaceDetails(data).then(resp=>{
           
            const photoname=resp.data.places[0].photos[3].name

            const PhotoUrl=PHOTO_REF_URL.replace('NAME',photoname)

            setPhotoUrl(PhotoUrl);
        })
    }


  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Hero Image with Overlay */}
      <div className="relative w-full h-[340px] rounded-xl overflow-hidden shadow-2xl mb-8">
        <img 
          src={photoUrl ? photoUrl : '/vite.svg'} 
          alt={trip?.userSelection?.location?.label || "Travel destination"} 
          className='w-full h-full object-cover'
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        
        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="flex justify-between items-end">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                {trip?.userSelection?.location?.label}
              </h1>
              
              {/* Trip Details - Mobile Hidden, Desktop Visible */}
              <div className="hidden lg:flex gap-3">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 border border-white/30">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">{trip?.userSelection?.noOfDays} Days</span>
                </div>
                
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 border border-white/30">
                  <DollarSign className="w-4 h-4" />
                  <span className="text-sm font-medium">{trip?.userSelection?.budget}</span>
                </div>
                
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 border border-white/30">
                  <Users className="w-4 h-4" />
                  <span className="text-sm font-medium">{trip?.userSelection?.people} {trip?.userSelection?.people === 1 ? 'Traveller' : 'Travellers'}</span>
                </div>
              </div>
            </div>
            
            {/* Share Button */}
            <button className="bg-white/20 backdrop-blur-md hover:bg-white/30 transition-all duration-300 rounded-full p-4 border border-white/30 group">
              <Send className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Trip Details Cards */}
      <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
              <Calendar className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Duration</p>
              <p className="text-lg font-semibold text-gray-900">{trip?.userSelection?.noOfDays} Days</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Budget</p>
              <p className="text-lg font-semibold text-gray-900">{trip?.userSelection?.budget}</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center">
              <Users className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Travellers</p>
              <p className="text-lg font-semibold text-gray-900">{trip?.userSelection?.people} {trip?.userSelection?.people === 1 ? 'Person' : 'People'}</p>
            </div>
          </div>
        </div>

        {trip?.tripData?.travelPlan?.bestTimeToTravel && (
          <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow sm:col-span-2">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <Sun className="w-5 h-5 text-orange-600" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">Best Time to Visit</p>
                <p className="text-sm font-medium text-gray-900 leading-relaxed">
                  {trip?.tripData?.travelPlan?.bestTimeToTravel}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Desktop Best Time to Visit */}
      {trip?.tripData?.travelPlan?.bestTimeToTravel && (
        <div className="hidden lg:block bg-gradient-to-r from-slate-50 to-blue-50 border border-gray-200 rounded-2xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Sun className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Best Time to Visit</h3>
              <p className="text-gray-700 leading-relaxed text-base">
                {trip?.tripData?.travelPlan?.bestTimeToTravel}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default InfoSection