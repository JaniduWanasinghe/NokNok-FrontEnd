import React from 'react'
import { Breadcrumbs } from '@material-tailwind/react'
import { useParams } from 'react-router-dom';
import SearchServiceSection from '../components/SearchSection';

export default function SearchServices() {
    const { squery } = useParams();

  return (
    <div className='mt-16 p-5'>
        <div>
        <Breadcrumbs>

<a href="/" className="opacity-60">
  Home
</a>

<a href="#">Services</a>
</Breadcrumbs>
        </div>
        <div className='mt-12'>
        <SearchServiceSection searchQuery={squery}/>

        </div>
        
    </div>
  )
}