import React, { useEffect, useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import { LoadScript } from '@react-google-maps/api';
import { AI_PROMPT, SelectBudgetList, SelectTravelList } from '../constant/options'
import {Input} from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { toast } from "sonner"
import { chatsession } from '../service/AiModel.js';

const Createtrip = () => {
    const [place,setPlace] = useState()
    const [formdata, setFormdata] = useState([]);

    const handleInputChange=(name, value)=>{
        if(name=="noOfDays"&&value>9){
            console.log("please enter days less than 9")
            return;
        }
            setFormdata({
                ...formdata,
                [name]: value
            })
    }

    const onGenerateTrips=async ()=>{
        if(formdata?.noOfDays>9&&!formdata?.location||!formdata?.budget||!formdata?.people||!formdata?.noOfDays){
           toast.error("Please fill all required field")
            return;
        }
        const FINAL_PROMPT=AI_PROMPT
        .replace('{location}',formdata?.location?.label)
        .replace('{totalDays}',formdata?.noOfDays)
        .replace('{people}',formdata?.people)
        .replace('{budget}',formdata?.budget)
        .replace('{totalDays}',formdata?.noOfDays)

        console.log(FINAL_PROMPT)

        const result=await chatsession.sendMessage(FINAL_PROMPT);
        console.log(result?.response?.text())
    }

  return (
    
      <LoadScript
      googleMapsApiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY} // Make sure this is defined
      libraries={['places']}
    >
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10  px-5 mt-30'>
        <h2 className='font-bold text-3xl'>Tell us your travel preference</h2>
        <p className='text-muted-foreground mt-3 text-xl '>We will use this information to create a personalized trip for you.</p>

        <div className='mt-20 flex flex-col gap-9'>
            <div>
                <h2 className='font-bold text-2xl'>What is your destination looking for?</h2>
                <GooglePlacesAutocomplete
                    apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
                    selectProps={{
                        onChange: (value) => {setPlace(value);
                         handleInputChange('location', value);
                        },
                        placeholder: 'Search for a location...',
                    }}
                />
            </div>
            <div>
                <h2 className='font-bold text-2xl mt-10'>How many days are you planning trip?</h2>
                <Input placeholder={'Ex 3}'} type="number" className='mt-3' 
                onChange={(e)=>handleInputChange('noOfDays',e.target.value)}
                />
            </div>

            <div>
                <h2 className='font-medium my-3 text-xl'>What is your budget range?</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-3 cursor-pointer'>
                    {SelectBudgetList.map((item,index)=>(
                            <div key={index}
                            onClick={()=>handleInputChange('budget',item.title)}
                            className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer${formdata?.budget==item.title&&'shadow-lg border-black'}`}>
                                <h2 className='text-4xl'>{item.icon}</h2>
                                <h2 className='font-bold text-lg'>{item.title}</h2>
                                <h2 className='text-muted-text-sm text-gray-500'>{item.desc}</h2>
                            </div>
                    ))}
                </div>
            </div>

           <div>
                <h2 className='font-medium text-xl my-10'>Who do you plan on travelling with on your next adventure?</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-3 cursor-pointer'>
                    {SelectTravelList.map((item,index)=>(
                            <div key={index}
                           onClick={()=>handleInputChange('people',item.people)}
                              className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer${formdata?.people==item.people&&'shadow-lg border-black'}`}>
                                <h2 className='text-4xl'>{item.icon}</h2>
                                <h2 className='font-bold text-lg'>{item.title}</h2>
                                <h2 className='text-muted-text-sm text-gray-500'>{item.desc}</h2>
                            </div>
                    ))}
                </div>
            </div>

        </div>

        <div className='mt-20 flex justify-end'>
               <Button onClick={onGenerateTrips}>Generate Trip</Button>
        </div>
    </div>
   </LoadScript>
  )
}

export default Createtrip
