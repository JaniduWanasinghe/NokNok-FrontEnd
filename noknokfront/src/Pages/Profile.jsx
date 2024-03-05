import React from 'react'
import { ProfileCard2 } from '../components/profile';
import { GetUser } from '../utils/handleUser';
import HistoryCard from '../components/Historycard';
import HotActions from '../components/HotActions';
import TitleText from '../components/TitleText';
import useAuth from '../hooks/useAuth';

export default function Profile() {
    const user=GetUser();
    useAuth();

  return (
    <div className='mt-14'>
        <TitleText>
        Profile
        </TitleText>
<div className='flex flex-wrap gap-3 items-center justify-center'>
<ProfileCard2 user={user}/>
<div>
  
    <HistoryCard/>
</div>


</div>
        
    </div>
  )
}
