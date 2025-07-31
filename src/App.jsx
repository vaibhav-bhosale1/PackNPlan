
import { Link } from 'react-router-dom'
import './App.css'
import { Button } from "@/components/ui/button"

function App() {

  return (
    <>

    <Link to="/create-trip">
      <Button>Create Trip</Button>
    </Link>
    </>
  )
}

export default App
