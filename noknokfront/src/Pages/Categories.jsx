import React from 'react'
import TitleText, { TitleText2 } from '../components/TitleText'
import CategorySection from '../components/CategorySection'
import { Breadcrumbs } from '@material-tailwind/react'

export default function Categories() {
  return (
    <div className='mt-16 p-5'>
        <div>
        <Breadcrumbs>

<a href="/" className="opacity-60">
  Home
</a>

<a href="#">Categories</a>
</Breadcrumbs>
        </div>
        <div className='mt-12'>
        <CategorySection/>

        </div>
        
    </div>
  )
}
