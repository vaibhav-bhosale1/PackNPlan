import React, { useEffect, useState } from 'react'
import {Button} from '../ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { Router, useNavigate } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { FcGoogle } from 'react-icons/fc';
import axios from 'axios';
import { Plane } from 'lucide-react';
const Header = () => {
  const [openDialog,setOpenDialog]=useState(false);
  const [loading,setLoading]=useState(false);
  
    const user=JSON.parse(localStorage.getItem('user'));
 
    useEffect(()=>{
        console.log(user);
    },[user])

    
    const login=useGoogleLogin({
        onSuccess:(codeResp)=>GetUserprofile(codeResp),
        onerror:(error)=>console.log(error)
    })

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
           window.location.reload()
        })
    }

     const smoothScrollTo = (elementId) => {
    document.getElementById(elementId)?.scrollIntoView({
      behavior: "smooth",
    })
  }
 

  return (
    
<nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Plane className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                packNplan
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => smoothScrollTo("features")}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => smoothScrollTo("how-it-works")}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                How it Works
              </button>
              <button
                onClick={() => smoothScrollTo("pricing")}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Pricing
              </button>
            </div>
           
            <div>
            {user ?
            <div className='flex items-center gap-3'>
                <a href="/my-trips">
                <Button variant="outline" className="rounded-full">My Trips</Button>
              </a>
               <a href="/create-trip">
                <Button variant="outline" className="rounded-full">+ Create Trip</Button>
              </a>
                <Popover>
                <PopoverTrigger>
                      <img src={user.picture} className='h-[35px] w-[35px] rounded-full cursor-pointer' alt="" />
                </PopoverTrigger>
                
                <PopoverContent  className="cursor-pointer"
                    onClick={()=>{
                            googleLogout();
                            localStorage.clear();
                            console.log("clicked")
                    }}
                >
                    <h2 >Log out</h2></PopoverContent>
                </Popover>
            </div>
             :
             <>
            <Button onClick={()=>{setOpenDialog(true)}} className="cursor-pointer">Get Started</Button>
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
                                </>
            
        }
        </div>
            
          </div>
        </div>
      </nav>
   
  )
}

export default Header


