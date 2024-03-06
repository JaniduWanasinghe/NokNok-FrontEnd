import React, { useState, useEffect } from 'react';
import axios from 'axios';
import newRequest from '../utils/newRequest';

const ShowReports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await newRequest.get('/report');
        setReports(response.data);
      } catch (error) {
        console.error('Error fetching reports:', error);
      }
    };

    fetchReports();
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-8">Reports</h1>

      {reports.length === 0 ? (
        <p>No reports available.</p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reports.map((report) => (
            <li key={report._id} className="bg-white p-4 rounded-md shadow-md">
              <h2 className="text-xl font-semibold mb-2">{report.senderName}</h2>
              <p className="text-gray-700">{report.text}</p>
              {report.url && (
                <a
                  href={report.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View URL
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShowReports;