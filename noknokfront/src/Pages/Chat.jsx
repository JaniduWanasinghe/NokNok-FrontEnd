import React from 'react'
import Chatbubble from '../components/Chatbubble'
import { InputWithButton } from '../components/Inputbox'

export default function 
() {
  return (
    <div className='w-full flex justify-center items-center p-10 mx-auto text-center flex-col'>
        <h1 className='mb-14'>Hemalaya</h1>
        <div className='max-w-screen-lg w-full flex flex-col justify-center items-center bg-blue-gray-200 p-5 rounded-lg'>
<div className='flex justify-end w-full '><Chatbubble/></div>
<div className='flex justify-start w-full '><Chatbubble/></div>

<InputWithButton/>

        </div>
    </div>
  )
}
