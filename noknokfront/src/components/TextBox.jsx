import React from 'react'
import { BlockLevelButton } from './BlockLevelButton'
import { ProfileCard } from './ProfileCard'

export const TextBox = () => {
  return (
    <div className='pl-5'>
<div className='flex gap-5 w-full '>
  <div className='border-r-2 border-blue-gray-700'>
<h3>75$</h3>
<p>Hourly Rate</p>
  </div>
  <div className='border-r-2'>
  <h3>75$</h3>
<p>Hourly Rate</p>
  </div>
  <div className='border-r-2'>
  <h3>75$</h3>
<p>Hourly Rate</p>
  </div>
</div>
<BlockLevelButton/>

<ProfileCard/>
<BlockLevelButton/>
    </div>
  )
}

