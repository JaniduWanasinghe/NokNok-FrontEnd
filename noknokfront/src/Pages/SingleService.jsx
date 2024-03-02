import React from 'react'
import { FeaturedImageGallery } from '../components/Gallery'
import { TextBox } from '../components/TextBox'
import TextDescription from '../components/TextDescription'

export default function SingleService() {
  return (
    <div className='mt-14 p-5'>
<div className='flex lg:flex-row flex-col text-center justify-center items-center'>
<div className='flex justify-center items-center mb-5'>
    <FeaturedImageGallery/>
    </div>
    <TextBox/>

<div>

</div>

</div>
<TextDescription/>

    </div>
  )
}
