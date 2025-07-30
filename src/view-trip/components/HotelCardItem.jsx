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
    
    <div>
         <Link to={'https://www.google.com/maps/search/?api=1&query='+hotel?.hotelName+","+hotel?.hotelAddress} target='_blank'>

                    <img  src={photoUrl?photoUrl:'/vite.svg'} alt=""  className='rounded-xl h-[200px] w-full object-cover'/>

                    <div className='my-2'>
                        <h2 className='font-medium '>🏨 {hotel?.hotelName}</h2>
                        <h2 className='font-xs text-gray-500 '>📍 {hotel?.hotelAddress}</h2>
                        <h2 className='font-sm  '>💵 {hotel?.price}</h2>
                        <h2 className='font-sm'>⭐ {hotel?.rating}</h2>

                    </div>
        </Link>
    </div>
  )
}

export default HotelCardItem