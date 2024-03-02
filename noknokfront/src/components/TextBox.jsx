import React, { useState } from 'react'
import { BlockLevelButton } from './BlockLevelButton'
import { ProfileCard } from './ProfileCard'
import { DialogWithForm } from './DialogBox'
import { HireserviceDialogBox } from './HireserviceDialogBox'
import { ChheckoutDialogBox } from './CheckoutDialogBox'
import { GetUser } from '../utils/handleUser'

export const TextBox = ({service}) => {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const[total,setTotal]=useState(0)
const handleOpen = () => setOpen((cur) => !cur);
const handleOpen2 = () => {

  setOpen2((cur) => !cur)

};

const handleSwitch=()=>{
 handleOpen2()
    handleOpen3()
    
}
const [open3, setOpen3] = React.useState(false);
const handleOpen3 = () => setOpen3((cur) => !cur);

  return (
    <div className='pl-5'>
<div className='flex justify-evenly mb-5 w-full '>
  <div className='border-r-2  pr-5'>
<h3>{service.price}/=</h3>
<p>Hourly Rate</p>
  </div>
  <div className='border-r-2 pr-5'>
  <h3>{service.totalStars}</h3>
<p>stars</p>
  </div>
  <div className='border-r-2 pr-5'>
  <h3>{service.sales}</h3>
<p>Sales</p>
  </div>
</div>
<BlockLevelButton text={"send a message"} handleopen={handleOpen}/>
<DialogWithForm status={open} handleopen={handleOpen} buyerId={GetUser()._id} sellerId={service.userId}/>
<HireserviceDialogBox rate={service.price} status={open2} handleopen={handleOpen2} handleSwitch={handleSwitch} setTotal={setTotal}/>
<ChheckoutDialogBox rate={service.price} status={open3} total={total} handleopen={handleOpen3}/>
<ProfileCard/>
<BlockLevelButton text={"Hire a service"} handleopen={handleOpen2}/>
    </div>
  )
}

