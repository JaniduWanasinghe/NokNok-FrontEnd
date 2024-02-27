import React from 'react'
import ico1 from '../assets/images/Frame.svg'
import ico2 from '../assets/images/Mechanical.svg'
import ico3 from '../assets/images/a.svg'
import { CardWithLink } from './CardWithLink'



export default function CardSection() {
    const cards=[{title:"Home Services",description:"We have 12 Kind of services all across the island",icon:ico1},
    {title:"Home Services",description:"We have 12 Kind of services all across the island",icon:ico2},
    {title:"Service Deliveries",description:"We have Successfully delivered 12000 jobs",icon:ico3}
]
  return (
    <div className='flex justify-evenly flex-wrap gap-2 p-3'>
{cards.map(
    (item,index)=>(
<CardWithLink title={item.title} description={item.description} icon={item.icon}/>
    )
)}
    </div>
  )
}
