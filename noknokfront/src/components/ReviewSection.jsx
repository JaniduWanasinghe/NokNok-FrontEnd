import React, { useState, useEffect } from 'react';
import { TestimonialCard } from './TestimonialCard';
import newRequest from '../utils/newRequest';
import TitleText from './TitleText';

function ReviewSection({ serviceId }) {
  const [hiredTasks, setHiredTasks] = useState([]);

  useEffect(() => {
    const fetchHiredTasks = async () => {
      try {
        const response = await newRequest.get(`/hired-tasks/by-service/${serviceId}`);
        const data = response.data;
        console.log(data)
        setHiredTasks(data);
      } catch (error) {
        console.error('Error fetching hired tasks:', error);
      }
    };

    fetchHiredTasks();
  }, [serviceId]);

  return (
    <div className="mt-8 shadow-md rounded-md p-5">
        <TitleText title={"Reviews"}></TitleText>
      {hiredTasks.map((task) => (
    task.reviews &&  (
        <TestimonialCard
          key={task._id}
          review={task.reviews}
          stars={task.totalStars}
          username={task.buyerName}
          avatar={task.buyerImage}
          
        />
      )
      ))}
    </div>
  );
}

export default ReviewSection;