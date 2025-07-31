import React from 'react'
import PlaceCardItem from './PlaceCardItem'

const PlacesToVisit = ({trip}) => {
  return (
    <div>
        <h2 className='font-bold text-2xl'>Places To Visit</h2>
        <div>
            {trip?.tripData?.travelPlan?.itinerary?.map((place,index)=>(
           
                    <div className='mt-5'>
                        <h2 className='font-medium text-lg'>Day {place?.day}</h2>
                            <div className='grid md:grid-cols-2 gap-5'>
                                {place?.plan.map((plan,index)=>(
                                    <div className='my-5'>
                                        <h2 className='font-medium text-orange-400 text-sm'></h2>
                                        <div className='my-3'>
                                            <PlaceCardItem place={plan}/>

                                        </div>
                                    

                                    </div>
                                ))}
                            </div>
                    </div>   
            ))}
        </div>
    </div>
  )
}

export default PlacesToVisit