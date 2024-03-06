import React from 'react'
import ServiceForm from './SeviceForm'
import { CreateCategoryForm } from '../components/CategoryForm'
import useAdmin from '../hooks/useAdmin'

export default function AddCategory() {
  useAdmin
  return (
    <div className='w-full flex justify-center items-center mt-16'>
        <CreateCategoryForm/>
    </div>
  )
}
