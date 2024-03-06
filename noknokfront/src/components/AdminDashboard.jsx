import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chip } from '@material-tailwind/react';
import TitleText from './TitleText';
import newRequest from '../utils/newRequest';

const AdminDashboard = () => {
  const [counts, setCounts] = useState({
    allServicesCount: 0,
    PendingServicesCount: 0,
    ProcessingServicesCount: 0,
    AcceptedServicesCount: 0,
    DoneServicesCount: 0,
    allHiredServicesCount: 0,
    allCategories: 0,
    allUsers: 0,
    allReport:0
  });

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const response = await newRequest.get('/admin');
        setCounts(response.data);
      } catch (error) {
        console.error('Error fetching counts:', error);
      }
    };

    fetchCounts();
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <TitleText>Admin Dashboard</TitleText>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-2">All Services</h2>
          <Chip size="lg" color="lightBlue" value={counts.allServicesCount} />
        </div>

        <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-2">Pending Services</h2>
          <Chip size="lg" color="red" value={counts.PendingServicesCount} />
        </div>

        <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-2">Processing Services</h2>
          <Chip size="lg" color="yellow" value={counts.ProcessingServicesCount} />
        </div>

        <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-2">Accepted Services</h2>
          <Chip size="lg" color="green" value={counts.AcceptedServicesCount} />
        </div>

        <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-2">Done Services</h2>
          <Chip size="lg" color="indigo" value={counts.DoneServicesCount} />
        </div>

        <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-2">All Hired Services</h2>
          <Chip size="lg" color="cyan" value={counts.allHiredServicesCount} />
        </div>

        <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-2">All Categories</h2>
          <Chip size="lg" color="purple" value={counts.allCategories} />
        </div>
<a href="/users/all">
        <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-2">All Users</h2>
          <Chip size="lg" color="amber" value={counts.allUsers} />
        </div>
        </a>
        <a href="/reports/all">
        <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-2">All Reports</h2>
      
          <Chip size="lg" color="amber" value={counts.allReport} />

        </div>
        
        </a>
      </div>
    </div>
  );
};

export default AdminDashboard;
