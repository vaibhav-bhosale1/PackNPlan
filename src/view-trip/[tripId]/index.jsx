import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../../service/firebaseConfig';
import InfoSection from '../components/InfoSection';

const ViewTrip = () => {
    
    const {tripId}=useParams();
    const [trip,setTrip]=useState([]);

    useEffect(()=>{
        tripId&&getTripData();
    },[tripId])

    const getTripData= async ()=>{
        const docRef=doc(db,'AiTrips',tripId);
        const docSnap=await getDoc(docRef);

        if(docSnap.exists()){
            console.log("Document",docSnap.data());
            setTrip(docSnap.data());
        }else{
            toast.error("No trip Data Found");
            
        }
    }

  return (
    <div className='p-10 md:px-20 lg:px-44  xl:px-56'>
        <InfoSection trip={trip}/>

    </div>
  )
}

export default ViewTrip