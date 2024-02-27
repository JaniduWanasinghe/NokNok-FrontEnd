import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavbarWithMegaMenu } from './components/Navbar'
import { FooterWithLogo } from './components/Footer'
import HeroSection from './components/HeroSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavbarWithMegaMenu/>
     <HeroSection/>
     <FooterWithLogo/>
    </>
  )
}

export default App
