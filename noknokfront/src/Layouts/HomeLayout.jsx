import React from 'react'
import { NavbarWithMegaMenu } from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import { FooterWithLogo } from '../components/Footer'

export default function HomeLayout() {
  return (
    <div className='w-full'>
<NavbarWithMegaMenu/>

    <Outlet/>
    <FooterWithLogo/>
        </div>
  )
}
