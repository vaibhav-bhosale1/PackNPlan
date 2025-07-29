import React from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'

const Createtrip = () => {
  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10  px-5 mt-30'>
        <h2 className='font-bold text-3xl'>Tell us your travel preference</h2>
        <p className='text-muted-foreground mt-3 text-xl '>We will use this information to create a personalized trip for you.</p>

        <div className='mt-10'>
            <div>
                <h2 className='font-bold text-2xl'>What is your destination looking for?</h2>
                <GooglePlacesAutocomplete
                    apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
                    selectProps={{
                        onChange: (value) => console.log(value),
                        placeholder: 'Search for a location...',
                    }}
                />
            </div>

        </div>
    </div>
  )
}

export default Createtrip
