import React from 'react'
import { BlockLevelButton } from './BlockLevelButton'
import { ProfileCard } from './ProfileCard'
import { DialogWithForm } from './DialogBox'
import { HireserviceDialogBox } from './HireserviceDialogBox'
import { ChheckoutDialogBox } from './CheckoutDialogBox'

export const TextBox = () => {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
const handleOpen = () => setOpen((cur) => !cur);
const handleOpen2 = () => {

  setOpen2((cur) => !cur)
if(open2){
handleOpen3()
}
};

const [open3, setOpen3] = React.useState(false);
const handleOpen3 = () => setOpen3((cur) => !cur);

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
<BlockLevelButton text={"send a message"} handleopen={handleOpen}/>
<DialogWithForm status={open} handleopen={handleOpen}/>
<HireserviceDialogBox status={open2} handleopen={handleOpen2}/>
<ChheckoutDialogBox status={open3} handleopen={handleOpen3}/>
<ProfileCard/>
<BlockLevelButton text={"Hire a service"} handleopen={handleOpen2}/>
    </div>
  )
}

