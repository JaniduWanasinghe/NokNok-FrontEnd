import { useEffect, useState } from 'react'
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
import io from 'socket.io-client';
import Conversastions from './Pages/Conversastions'
import Chat from './Pages/Chat'
import Categories from './Pages/Categories'
const socket = io('http://localhost:8800'); // Update with your server URL



function App() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    socket.on('notification', (message) => {
      setNotifications((prevNotifications) => [...prevNotifications, message]);
      console.log(notifications)
    });

    return () => {
      socket.disconnect();
    };
  }, []);
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
      },
      {
        path:"/Categories",element:
  <Categories/>
      },
      {
        path:"/Conversations",element:
  <Conversastions/>
      },
      {
        path:"/Conversations/chat/",element:
  <Chat/>
      }
    ]
    }])
  return (
    <> 
    <RouterProvider router={router}/>
    </>
  )
}

export default App
