import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Createtrip from './create-trip/index.jsx'
import { Toaster } from "@/components/ui/sonner"
import { GoogleOAuthProvider } from '@react-oauth/google';
import ViewTrip from './view-trip/[tripId]/index.jsx'

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
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
    <Toaster position="top-center" expand={false} richColors  />
      <RouterProvider router={router} />
      </GoogleOAuthProvider>
  </StrictMode>,
)
