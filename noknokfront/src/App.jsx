import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavbarWithMegaMenu } from './components/Navbar'
import HomeLayout from './Layouts/HomeLayout'
import Home from './Pages/Home'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Pages/Login'
import ServiceForm from './Pages/SeviceForm'
import Service from './Pages/Service'


function App() {
  const router= createBrowserRouter(
    [{
      path:"/",
      element: <HomeLayout/>,
      children:[{
        path:"/",element:
  <Home/>
      },
      {
        path:"/login",element:
  <Login/>
      },
      {
        path:"/serive/add",element:
  <Service/>
      }
    ]
    }])
  return (
    <RouterProvider router={router}/>
  )
}

export default App
