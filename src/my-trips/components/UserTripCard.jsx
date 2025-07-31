import React, { useEffect, useState } from 'react'
import { GetPlaceDetails, PHOTO_REF_URL } from '../../service/GlobalApi';
import { Link } from 'react-router-dom';

const UserTripCard = ({trip}) => {
     const [photoUrl,setPhotoUrl]=useState();
    
    
        useEffect(()=>{
            trip&&GetPlacePhoto();
        },[trip])
    
    
    
        const GetPlacePhoto=async()=>{
            const data={
                textQuery:trip?.userSelection?.location?.label
            }
            const result=await GetPlaceDetails(data).then(resp=>{
               
                const photoname=resp.data.places[0].photos[6].name
    
                const PhotoUrl=PHOTO_REF_URL.replace('NAME',photoname)
    
                setPhotoUrl(PhotoUrl);
            })
        }
    
  return (
    <Link to={'/view-trip/'+trip.id}>
    <div className='gap-5 hover:scale-105 transition-all '>
        <img src={photoUrl?photoUrl:"public/cat_spin_dribble.gif"} alt="" className='object-cover rounded-xl h-[220px]' />
        <div>
            <h2 className='font-bold text-lg'>
                {trip?.userSelection?.location?.label}
            </h2>
            <h2 className='text-sm text-gray-400'>{trip?.userSelection?.noOfDays} days with {trip?.userSelection?.budget} </h2>
        </div>

    </div>
    </Link>
  )
}

export default UserTripCard