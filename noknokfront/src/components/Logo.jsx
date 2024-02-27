import { Typography } from '@material-tailwind/react'
import React from 'react'

export default function Logo() {
  return (
    <Typography
    as="a"
    href="#"
    variant="h6"
    className="mr-4 cursor-pointer py-1.5 lg:ml-2"
  ><span className='text-blue-600'>Nok</span>Nok
  </Typography>
  )
}
