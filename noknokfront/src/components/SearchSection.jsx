import React, { useEffect, useState } from 'react';
import newRequest from '../utils/newRequest';
import TitleText, { TitleText2 } from './TitleText';
import { ServiceCard } from './serviceCard';
import { getPublicUrl } from '../utils/PublicUrl';

export default function SearchServiceSection({ searchQuery }) {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        // Construct the API request URL with search parameters
        const url = `/service/?search=${searchQuery}`;

        const response = await newRequest.get(url);
        const data = response.data;
        setServices(data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, [searchQuery]);

  return (
    <div className='p-5 pl-10 mt-14'>
      <TitleText title={" Get a Service"} />
      <TitleText2 title={"High-Quality Solutions To You"} />
      <div className='flex flex-wrap gap-5 mt-24'>
        {services.map((service) => (
          <ServiceCard key={service._id} id={service._id} title={service.title} shortdesc={service.shortDesc} cover={getPublicUrl(service.cover)} />
        ))}
      </div>
    </div>
  );
}
