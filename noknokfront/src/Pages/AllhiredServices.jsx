import React, { useEffect, useState } from 'react'
import newRequest from '../utils/newRequest';
import { GetUser } from '../utils/handleUser';
import { HiredTable } from '../components/hiredTable';
import { getPublicUrl } from '../utils/PublicUrl';
import useProvider from '../hooks/useProvider';
import useCustomer from '../hooks/useCustomer';

export default function AllhiredServices() {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
useCustomer()

    useEffect(() => {
        const fetchServices = async () => {
        

          try {
            const response =await newRequest.get(`hired-tasks/by-user/${GetUser()._id}`,{
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
        total:service.total,
        location:service.location,
        buyerId:service.buyerId,
        sellerId:service.sellerId,
        review:service.review,
        rating:service.rating,
        status:service.status,
        cover: getPublicUrl(service.cover),
        payment:service.payment
        
     
      }));
      const TABLE_HEAD = ["","Title", "location", "Total", "Status","payment Status"];

    return (
        <div className='w-full flex flex-col justify-center items-center mt-16 p-5'>
          <h1 className='text-2xl font-bold text-center mb-8'>All Services</h1>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <HiredTable TABLE_ROWS={TABLE_ROWS} TABLE_HEAD={TABLE_HEAD} />
          )}
        </div>
      );
}
