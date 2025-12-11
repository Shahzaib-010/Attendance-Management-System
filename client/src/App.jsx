import { useState } from 'react'
import './App.css'
import LandingPage from 'pages/LandingPage'
import LoginPage from 'pages/LoginPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <LoginPage/>
    </>
  )
}

export default App
