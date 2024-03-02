import React, { useEffect, useState } from 'react'
import newRequest from '../utils/newRequest';
import TitleText, { TitleText2 } from './TitleText';
import { ServiceCard } from './serviceCard';

export default function ServiceSection({catId}) {
    const [services, setServices] = useState([]);

    useEffect(() => {
      const fetchServices = async () => {
        try {
          const response = await newRequest.get(`/service/?cat=${catId}`);
          const data = response.data;
          setServices(data);
        } catch (error) {
          console.error('Error fetching services:', error);
        }
      };
  
      fetchServices();
    }, [catId]);
  return (
    <div className='p-5 pl-10 mt-14'>
        <TitleText title={" Get a Service"}/>
      <TitleText2 title={"High Quality Solutions To You"}/>
        <div className='flex flex-wrap gap-5 mt-24'>
        {services.map((service) => (
            <ServiceCard/>
        ))}
        </div>
    </div>

  )
}
