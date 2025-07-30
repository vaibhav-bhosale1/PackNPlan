import React from 'react'

const InfoSection = ({trip}) => {
  return (
    <div>
        <img src="/vite.svg" alt="" className='w-full h-[340px] object-cover rounded-xl'/>

        <div>
            <h2 clas>{trip?.userSelection?.location?.label}</h2>
        </div>
    </div>
  )
}

export default InfoSection