import React, { useEffect, useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import { LoadScript } from '@react-google-maps/api';
import { AI_PROMPT, SelectBudgetList, SelectTravelList } from '../constant/options'
import {Input} from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { toast } from "sonner"
import { chatsession } from '../service/AiModel.js';
import { doc, setDoc } from "firebase/firestore";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { db } from '../service/firebaseConfig.jsx';
import { LoaderPinwheel } from 'lucide-react';

const Createtrip = () => {
    const [place,setPlace] = useState()
    const [formdata, setFormdata] = useState([]);
    const [openDialog,setOpenDialog]=useState(false);
    const [loading,setLoading]=useState(false);

    const handleInputChange=(name, value)=>{
        if(name=="noOfDays"&&value>9){
            console.log("please enter days less than 9")
            toast.warning("Please Enter values less than 9 days")
            return;
        }
            setFormdata({
                ...formdata,
                [name]: value
            })
    }

    const login=useGoogleLogin({
        onSuccess:(codeResp)=>GetUserprofile(codeResp),
        onerror:(error)=>console.log(error)
    })



    const onGenerateTrips=async ()=>{
        
        const user=localStorage.getItem('user')

        if(!user){
            setOpenDialog(true);
            return;
        }
        if(!formdata?.noOfDays&&!formdata?.location||!formdata?.budget||!formdata?.people||!formdata?.noOfDays){
           toast.error("Please fill all required field")
            return;
        }
        if(!formdata?.noOfDays>9){
            toast.warning("Please Enter days less than 9 days");
            return;
        }
        setLoading(true);
        const FINAL_PROMPT=AI_PROMPT
        .replace('{location}',formdata?.location?.label)
        .replace('{totalDays}',formdata?.noOfDays)
        .replace('{people}',formdata?.people)
        .replace('{budget}',formdata?.budget)
        .replace('{totalDays}',formdata?.noOfDays)

        console.log(FINAL_PROMPT)

        const result=await chatsession.sendMessage(FINAL_PROMPT);
        console.log(result?.response?.text())
        saveAiTripData(result?.response?.text());
        setLoading(false);
    }

    const saveAiTripData=async (TripData)=>{
        setLoading(true);
        const user=JSON.parse(localStorage.getItem('user'));
        const docId=Date.now().toString();
        await setDoc(doc(db, "AiTrips", docId), {
            userSelection:formdata,
            tripData:JSON.parse(TripData),
            userEmail:user?.email,
            id:docId

        });

        setLoading(false);
    }

    const GetUserprofile=async(tokenInfo)=>{
        axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,{
            headers:{
                Authorization:`Bearer ${tokenInfo?.access_token}`,
                Accept:'application/json'
            }
        }).then((resp)=>{
            console.log(resp);
            localStorage.setItem('user',JSON.stringify(resp.data));
            setOpenDialog(false);
            onGenerateTrips();
        })
    }
  return (
    
      <LoadScript
      googleMapsApiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY} 
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
               <Button onClick={onGenerateTrips}
                   disabled={loading}
               >
                {loading ? (
                <div className="flex items-center gap-2">
                    Please Wait, Generating Trip...
                    <LoaderPinwheel className="w-5 h-5 animate-spin" />
                </div>
                ) : (
                'Generate Trip'
                )}

               </Button>
        </div>
                    <Dialog open={openDialog}>
                 
                    <DialogContent>
                        <DialogHeader>
                        <DialogTitle>Sign In</DialogTitle>
                        <DialogDescription>
                            <h2 className='fomt-bold text-lg mt-2'>
                                Sign In with Google
                            </h2>
                            <p>Sign in to the App with Google Auth securely </p>
                            <Button 
                            disabled={loading}
                            onClick={login}
                            className="w-full mt-5 flex gap-4 items-center">
                                <FcGoogle className=" mr-1.5 h-8 w-8"/>Sign In with Google
                            </Button>
                        </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                    </Dialog>

    </div>
   </LoadScript>
  )
}

export default Createtrip
