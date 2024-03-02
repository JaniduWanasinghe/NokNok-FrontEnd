import React, { useEffect, useState } from 'react'
import newRequest from '../utils/newRequest';
import { CategoryCard } from './CategoryCard';

export default function CategorySection() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
      // Fetch categories when the component mounts
      const fetchCategories = async () => {
        try {
          const response = await newRequest.get("/category");
          const data =  response.data;
  
          // Update the state with the fetched categories
          setCategories(data);
        } catch (error) {
          console.error('Error fetching categories:', error);
        }
      };
  
      fetchCategories();
    }, []); 
  return (
    <div>
        <h1>
        Get a Service
        </h1>
        <h3>High Quality Solutions To You</h3>

        <div className='flex flex-wrap gap-5'>
        {categories.map((category) => (
        <CategoryCard key={category._id} cover={category.cover} title={category.title} Scount={category.scount}/>
        ))}
        </div>
    </div>

  )
}
