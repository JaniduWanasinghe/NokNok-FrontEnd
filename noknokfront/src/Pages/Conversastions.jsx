import React from 'react'
import { ConversationSection } from '../components/ConversationSection'

export default function Conversastions() {
  return (
    <div className='w-full flex flex-col justify-center items-center mt-16'>
        <h1 className='mb-8 font-bold text-3xl'>Conversastions</h1>

        <div>
            <ConversationSection/>
        </div>
    </div>
  )
}
