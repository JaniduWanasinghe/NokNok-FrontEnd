import React, { useEffect, useState } from 'react'
import { ProfileCard2 } from '../components/profile';
import { GetUser } from '../utils/handleUser';
import HistoryCard from '../components/Historycard';
import HotActions from '../components/HotActions';
import TitleText from '../components/TitleText';
import useAuth from '../hooks/useAuth';
import newRequest from '../utils/newRequest';

export default function Profile() {
    const user=GetUser();
    useAuth();
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);


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
    
  return (
    <div className='mt-14'>
        <TitleText>
        Profile
        </TitleText>
<div className='flex flex-wrap gap-3 items-center justify-center'>
<ProfileCard2 user={user}/>
<div>
  
    <HistoryCard services={services} loading={loading}/>
</div>


</div>
        
    </div>
  )
}
