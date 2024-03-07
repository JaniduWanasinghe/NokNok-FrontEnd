import React from 'react'
import UpdateServiceForm from '../components/ServiceUpdateForm';
import useProvider from '../hooks/useProvider';
import { useParams } from 'react-router-dom';

export default function UpdateService() {
    const { serviceId } = useParams();
useProvider()
  return (
    <div className='w-full flex justify-center items-center mt-16'>
        <UpdateServiceForm serviceId={serviceId}/>
    </div>
  )
}
