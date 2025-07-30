import React from 'react'
import { Button } from '@/components/ui/button'
import { BsFillSendFill } from "react-icons/bs";

const InfoSection = ({trip}) => {
  return (
    <div>
        <img src="/vte.svg" alt="" className='w-full h-[340px] object-cover rounded-xl'/>


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