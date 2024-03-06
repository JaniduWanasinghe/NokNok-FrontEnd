import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import newRequest from '../utils/newRequest';
import { GetUser } from '../utils/handleUser';

export function ReportForm() {
  const navigate = useNavigate();
  const [reportMessage, setReportMessage] = useState('');
  const [reportUrl, setReportUrl] = useState('');

  const handleReport = async () => {
    try {
      const formData = {
        senderId:GetUser()._id,
        senderName:GetUser().username,
        text:reportMessage,
        url:reportUrl,
      };

      // Assume you have an API endpoint for reporting
      const response = await newRequest.post('/report', formData);

      const data = response.data;
      console.log(data);

      // Handle success, e.g., show a success message
      alert('Report submitted successfully!');

      // Redirect to the home page or another appropriate page
      navigate('/');
    } catch (error) {
      // Handle error, e.g., show an error message
      console.error('Report submission failed', error);
    }
  };

  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray" className="text-center p-3" style={{ background: "rgba(213, 209, 255, 0.54)" }}>
        Report Issue
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Report Message
          </Typography>
          <Input
            size="lg"
            placeholder="Describe the issue..."
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={reportMessage}
            onChange={(e) => setReportMessage(e.target.value)}
          />

          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Report URL
          </Typography>
          <Input
            size="lg"
            placeholder="Enter the URL (if applicable)"
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={reportUrl}
            onChange={(e) => setReportUrl(e.target.value)}
          />
        </div>

        <Button className="mt-6 bg-blue-500" fullWidth onClick={handleReport}>
          Submit Report
        </Button>
      </form>
    </Card>
  );
}
