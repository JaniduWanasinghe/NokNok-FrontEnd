import React, { useEffect, useState } from 'react';
import { Card, List, ListItem, Chip } from '@material-tailwind/react';
import TitleText from './TitleText';
import { GetUser } from '../utils/handleUser';
import newRequest from '../utils/newRequest';

export default function HotActions() {
  const [counts, setCounts] = useState({
    allServicesCount: 0,
    userPendingServicesCount: 0,
    userProcessingServicesCount: 0,
    userAcceptedServicesCount: 0,
    userDoneServicesCount: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await newRequest.get(`hired-tasks/countbyid/${GetUser()._id}`);
        setCounts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <TitleText>HotActions</TitleText>
        <List>
          <ListItem>
            <div className='flex gap-5'>
              All services :{' '}
              <a href={`${GetUser.Role === 'provider' ? '/hired' : '/provided'}`}>
                <Chip color="green" value={counts.allServicesCount} />
              </a>
            </div>
          </ListItem>
          <ListItem>
            <div className='flex gap-5'>
              All Pending :{' '}
              <a href={`${GetUser.Role === 'provider' ? '/hired' : '/provided'}`}>
                <Chip color="green" value={counts.userPendingServicesCount} />
              </a>
            </div>
          </ListItem>
          <ListItem>
            <div className='flex gap-5'>
              All Processing :{' '}
              <a href={`${GetUser.Role === 'provider' ? '/hired' : '/provided'}`}>
                <Chip color="green" value={counts.userProcessingServicesCount} />
              </a>
            </div>
          </ListItem>
          <ListItem>
            <div className='flex gap-5'>
              All Accepted :{' '}
              <a href={`${GetUser.Role === 'provider' ? '/hired' : '/provided'}`}>
                <Chip color="green" value={counts.userAcceptedServicesCount} />
              </a>
            </div>
          </ListItem>
          <ListItem>
            <div className='flex gap-5'>
              All Done :{' '}
              <a href={`${GetUser.Role === 'provider' ? '/hired' : '/provided'}`}>
                <Chip color="green" value={counts.userDoneServicesCount} />
              </a>
            </div>
          </ListItem>
        
        </List>
    </div>
  );
}
