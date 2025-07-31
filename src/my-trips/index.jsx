import { collection, doc, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { db } from '../service/firebaseConfig';
import UserTripCard from './components/UserTripCard';

const MyTrips = () => {
    const [userTrips,setUserTrips]=useState([]);

    useEffect(()=>{
        GetUserTrips();
    },[])

    const navigate=useNavigate();

    const GetUserTrips=async ()=>{
        const user=JSON.parse(localStorage.getItem('user'));

        if(!user){
            navigate('/');
            return;
        }
  
        const q=query(collection(db,'AiTrips'),where('userEmail','==',user?.email));

        const querySnapshot=await getDocs(q);
              setUserTrips([]);
        querySnapshot.forEach((doc)=>{
            setUserTrips(prevVal=>[...prevVal,doc.data()])
        })
    }
  return (
    <div className='p-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10 '>
        <h2 className='font-bold text-3xl'>My Trips</h2>
        <div className='grid grid-cols-2 sm:grid-cols-3 mt-10 gap-6'>
           {userTrips?.length > 0
        ? userTrips.map((trip, index) => (
            <UserTripCard key={index} trip={trip}  />
            ))
        : [1, 2, 3, 4, 5, 6].map((item, index) => (
            <div key={index} className='h-[220px] w-full bg-slate-400 animate-pulse rounded-xl'></div>
            ))
                }
                </div>
            </div>
  )
}

export default MyTrips