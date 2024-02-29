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
import AllServices from './Pages/AllServices'
import SignUp from './Pages/SignUp'
import SingleService from './Pages/SingleService'
import AddCategory from './Pages/AddCategory'



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
      },
      {
        path:"/serive/all",element:
  <AllServices/>
      },
      {
        path:"/signup",element:
  <SignUp/>
      },
      {
        path:"/service/singleservice",element:
  <SingleService/>
      },
      {
        path:"/Category/add",element:
  <AddCategory/>
      }
    ]
    }])
  return (
    <RouterProvider router={router}/>
  )
}

export default App
