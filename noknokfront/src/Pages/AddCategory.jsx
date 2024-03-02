import React from 'react'
import ServiceForm from './SeviceForm'
import { CreateCategoryForm } from '../components/CategoryForm'

export default function AddCategory() {
  return (
    <div className='w-full flex justify-center items-center mt-16'>
        <CreateCategoryForm/>
    </div>
  )
}
