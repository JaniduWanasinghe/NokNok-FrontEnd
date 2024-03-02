import React from 'react'
import { StarIcon } from '@heroicons/react/24/solid'
import heroimg from '../assets/images/heroimg.png'
import { InputWithButton } from './Inputbox';
export default function HeroSection() {
    const stars = Array(5).fill(null);
  return (
    <div className="">
    <div className='flex lg:flex-row flex-col-reverse h-fit  items-center justify-center  p-5 mt-16 mb-16 bg-white'>
        <div className='  lg:w-3/5 overflow-hidden flex flex-col  justify-center  p-5'>
<div className='flex mb-8 items-center '>

{stars.map((_, index) => (
            <StarIcon key={index} color='gold' className='w-8' />
          ))}
<h3 className='ml-5 text-sm lg:text-base'>TRUSED BY OVER 2M+ USERS</h3>
</div>
<h1 className="lg:text-5xl text-3xl  font-bold mb-16">
Get the Perfect <span className='text-blue-600'>Home service</span>  Best Suit For You
</h1>
<h3 className='text-sm text-gray-700'>
With the world's #1  Home Service Platform
</h3>
<InputWithButton label={"Key Words"} btntext={"Search"} />

        </div>
        <div className='h-full lg:w-2/5 w-full overflow-hidden pr-5'>
<img src={heroimg} alt="" className='w-full ' />
        </div>
    </div>
    </div>
  )
}
