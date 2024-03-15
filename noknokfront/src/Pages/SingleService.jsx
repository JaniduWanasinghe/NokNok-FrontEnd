import React, { useEffect, useState } from 'react'
import { FeaturedImageGallery } from '../components/Gallery'
import { TextBox } from '../components/TextBox'
import TextDescription from '../components/TextDescription'
import { useParams } from 'react-router-dom';
import newRequest from '../utils/newRequest';
import ReviewSection from '../components/ReviewSection';

export default function SingleService() {
  const { serviceid } = useParams();
  const [serviceDetails, setServiceDetails] = useState(null);

  useEffect(() => {
    const fetchServiceDetails = async () => {
      try {
        const response = await newRequest.get(`/service/single/${serviceid}`);
        const data = response.data;
        setServiceDetails(data);
      } catch (error) {
        console.error('Error fetching service details:', error);
      }
    };

    fetchServiceDetails();
  }, [serviceid]);

  if (!serviceDetails) {
    // Loading state or error handling can be added here
    return <div>Loading...</div>;
  }


  return (

    <div className='mt-14 p-5'>
<div className='flex lg:flex-row flex-col text-center justify-center items-center'>
<div className='flex justify-center items-center mb-5'>
    <FeaturedImageGallery images={serviceDetails.images}/>
    </div>
    <TextBox service={serviceDetails}/>

<div>

</div>

</div>
<TextDescription service={serviceDetails.desc}/>

<div>
  <ReviewSection serviceId={serviceDetails._id} />
</div>

    </div>
  )
}
