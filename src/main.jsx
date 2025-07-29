import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Createtrip from './create-trip/index.jsx'
import { Toaster } from "@/components/ui/sonner"

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },{
    path: '/create-trip',
    element: <Createtrip/>,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster position="top-center" expand={false} richColors  />
      <RouterProvider router={router} />
  </StrictMode>,
)
