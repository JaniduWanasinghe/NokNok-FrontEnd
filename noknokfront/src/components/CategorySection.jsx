import React, { useEffect, useState } from 'react'
import newRequest from '../utils/newRequest';
import { CategoryCard } from './CategoryCard';
import TitleText, { TitleText2 } from './TitleText';

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
    <div className='p-5 pl-10 mt-14'>
        <TitleText title={" Get a Service"}/>
      <TitleText2 title={"High Quality Solutions To You"}/>
        <div className='flex flex-wrap gap-5 mt-24'>
        {categories.map((category) => (
        <CategoryCard key={category._id} cover={category.cover} title={category.title} Scount={category.scount}/>
        ))}
        </div>
    </div>

  )
}
