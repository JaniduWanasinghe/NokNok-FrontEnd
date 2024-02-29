import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TableWithStripedRows } from '../components/Table';

export default function AllServices() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('http://localhost:8800/api/service',{
            params: {
                userId: '001', 
              },
        });
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
    // Map the service properties to the table row properties
    // Adjust this based on your service model structure
    id: service._id,
    title: service.title,
    description: service.desc,
    // ... add other fields as needed
  }));

  return (
    <div className='w-full flex justify-center items-center mt-16 p-5'>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <TableWithStripedRows TABLE_ROWS={TABLE_ROWS} />
      )}
    </div>
  );
}
