import React from 'react'
import { Breadcrumbs } from '@material-tailwind/react'
import ServiceSection from '../components/ServicesSection'
import { useParams } from 'react-router-dom';

export default function Services() {
    const { catid } = useParams();
console.log(catid);
  return (
    <div className='mt-16 p-5'>
        <div>
        <Breadcrumbs>

<a href="/" className="opacity-60">
  Home
</a>
<a href="/categories" className="opacity-60">
  Categories
</a>

<a href="#">Services</a>
</Breadcrumbs>
        </div>
        <div className='mt-12'>
        <ServiceSection catId={catid}/>

        </div>
        
    </div>
  )
}
