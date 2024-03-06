import React, { useEffect, useState } from 'react'
import newRequest from '../utils/newRequest';
import { GetUser } from '../utils/handleUser';
import { HiredTable } from '../components/hiredTable';
import { getPublicUrl } from '../utils/PublicUrl';
import { HistoryTable } from './HistoryTable';

export default function HistoryCard({services,loading}) {


  
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
          <h1 className='text-2xl font-bold text-center mb-8'>History</h1>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <HistoryTable TABLE_ROWS={TABLE_ROWS} TABLE_HEAD={TABLE_HEAD} />
          )}
        </div>
      );
}
