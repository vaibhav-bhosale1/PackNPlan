import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { BsFillSendFill } from "react-icons/bs";
import { GetPlaceDetails, PHOTO_REF_URL } from '../../service/GlobalApi';


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
    <div>
        <img  src={photoUrl?photoUrl:'/vite.svg'} alt="" className='w-full h-[340px] object-cover rounded-xl'/>


            <div className='flex justify-between items-center'>
                
                <div className='my-5 flex flex-col gap-2'>
                    <h2 className='font-bold text-2xl'>{trip?.userSelection?.location?.label}</h2>
                    <div className='hidden sm:flex gap-2'>
                        <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 sm:text-xs md:text-lg'>📅 {trip?.userSelection?.noOfDays} Day</h2>
                        <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 sm:text-xs md:text-lg'>💵 {trip?.userSelection?.budget} Day</h2>
                        <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 sm:text-xs md:text-lg'>🥂 No of Traveller: {trip?.userSelection?.people} people</h2>
                    </div>
                </div>

                <Button><BsFillSendFill /></Button>
            </div>
    </div>
  )
}

export default InfoSection