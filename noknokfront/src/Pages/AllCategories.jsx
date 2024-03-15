import React from 'react';
import CategoriesTable from '../components/CategoryTable';
import useAdmin from '../hooks/useAdmin';
 


function HandleAllCategories() {
useAdmin();
  return (
    <div className='w-full flex flex-col justify-center items-center mt-16 p-5'>
      <h1 className='text-2xl font-bold text-center mb-8'>All Services</h1>
      <CategoriesTable/>
    </div>
  );
}
export default HandleAllCategories;