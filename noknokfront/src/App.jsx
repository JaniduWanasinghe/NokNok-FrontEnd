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
import Services from './Pages/Services'
import AllhiredServices from './Pages/AllhiredServices'
import AllProvidedServices from './Pages/AllProvidedServices'
import Report from './Pages/Report'
import { GetUser } from './utils/handleUser'
import Notification from './components/Notification'
import Profile from './Pages/Profile'
import AboutUs from './Pages/AboutUs'
import WhyUs from './Pages/Contactus'
import ContactUs from './Pages/Contactus'
import ShowReports from './Pages/showReports'
import AdminUsersPage from './Pages/AllUsers'
import UpdateService from './Pages/UpdateService'



function App() {
  const [notifications, setNotifications] = useState([]);

  const [notificationMessage, setNotificationMessage] = useState('');


  const [socket, setSocket] = useState(null);

  useEffect(() => {
    setSocket(io("http://localhost:8800"));
  }, []);

  useEffect(() => {
    if(GetUser()){
      socket?.emit("newUser", GetUser()._id);

    }
  }, [socket]);


  useEffect(() => {
    socket?.on("getNotification", (data) => {
      console.log(data)
      setNotificationMessage('You received a new job!');
      const timeout = setTimeout(() => {
        setNotificationMessage('');
      }, 5000);

      return () => clearTimeout(timeout);

    });
  }, [socket]);
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
        path:"/service/add",element:
  <Service/>
      },
      {
        path:"/service/all",element:
  <AllServices/>
      },
      {
        path:"/services/:catid",element:
  <Services/>
      },
      {
        path:"/signup",element:
  <SignUp/>
      },
      {
        path:"/service/singleservice/:serviceid",element:
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
        path:"/Conversations/chat/:id",element:
  <Chat/>
      },
      {
        path:"/hired",element:
  <AllhiredServices/>
      },
      {
        path:"/provided",element:
  <AllProvidedServices/>
      },
      {
        path:"/report/add",element:
  <Report/>
      },
      {
        path:"/profile",element:
  <Profile/>
      },
      {
        path:"/aboutus",element:
  <AboutUs/>
      },
      {
        path:"/contactus",element:
  <ContactUs/>
      },
      {
        path:"/reports/all",element:
  <ShowReports/>
      
    },
    {
      path:"/users/all",element:
<AdminUsersPage/>
    },
    {
      path:"/service/update/:serviceId",element:
<UpdateService/>
    }

    ]
    }])
  return (
    <> 
    <RouterProvider router={router}/>
    <Notification message={notificationMessage} />

    </>
  )
}

export default App
