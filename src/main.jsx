import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Createtrip from './create-trip/index.jsx'
import { Toaster } from "@/components/ui/sonner"
import { GoogleOAuthProvider } from '@react-oauth/google';
import ViewTrip from './view-trip/[tripId]/index.jsx'
import Header from './components/custom/Header.jsx'
import MyTrips from './my-trips/index.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },{
    path: '/create-trip',
    element: <Createtrip/>,
  },{
    path:'/view-trip/:tripId',
    element:<ViewTrip/>
  },{
    path:'/my-trips',
    element:<MyTrips/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
    <Toaster position="top-center" expand={false} richColors  />
      <Header/>
      <RouterProvider router={router} />
      </GoogleOAuthProvider>
  </StrictMode>,
)
