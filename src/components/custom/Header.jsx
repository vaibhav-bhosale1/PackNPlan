import React, { useEffect, useState } from 'react'
import {Button} from '../ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
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

  return (
    <div className='p-3 shadow-md flex justify-between items-center'>
        <img src="/vite.svg" alt="" />
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
  )
}

export default Header