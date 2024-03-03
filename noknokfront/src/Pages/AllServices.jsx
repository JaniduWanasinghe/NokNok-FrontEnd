import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TableWithStripedRows } from '../components/Table';
import newRequest from '../utils/newRequest';
import { GetUser } from '../utils/handleUser';
import { getPublicUrl } from '../utils/PublicUrl';

export default function AllServices() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response =await newRequest.get('/service',{
            params: {
                userId: GetUser()._id, 
              },
        });
        console.log(response)
        const servicesData = response.data;

        setServices(servicesData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching services', error);
      }
    };

    fetchServices();
  }, []);

  const TABLE_ROWS = services.map((service) => ({

    id: service._id,
    title: service.title,
    description: service.shortDesc,
    cover:getPublicUrl(service.cover)
  }));
  const TABLE_HEAD = ["","Title", "Short description", "action", ""];

  return (
    <div className='w-full flex flex-col justify-center items-center mt-16 p-5'>
      <h1 className='text-2xl font-bold text-center mb-8'>All Services</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <TableWithStripedRows TABLE_ROWS={TABLE_ROWS} TABLE_HEAD={TABLE_HEAD} />
      )}
    </div>
  );
}
