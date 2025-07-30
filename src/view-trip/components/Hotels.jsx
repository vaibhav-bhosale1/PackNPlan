import React from 'react'
import { Link } from 'react-router-dom'

const Hotels = ({trip}) => {
  return (
    <div>
        
        <h2 className='font-bold text-2xl mt-5'>Hotel Recommendation</h2>

        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
            {trip?.tripData?.travelPlan?.hotels?.map((hotel,index)=>(
                <div key={index} className='hover:scale-110 transition-all cursor-pointer'>
                    <Link to={'https://www.google.com/maps/search/?api=1&query='+hotel?.hotelName+","+hotel?.hotelAddress} target='_blank'>

                    <img src="/vite.svg" alt=""  className='rounded-xl'/>

                    <div className='my-2'>
                        <h2 className='font-medium '>🏨 {hotel?.hotelName}</h2>
                        <h2 className='font-xs text-gray-500 '>📍 {hotel?.hotelAddress}</h2>
                        <h2 className='font-sm  '>💵 {hotel?.price}</h2>
                        <h2 className='font-sm'>⭐ {hotel?.rating}</h2>

                    </div>
                    </Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Hotels