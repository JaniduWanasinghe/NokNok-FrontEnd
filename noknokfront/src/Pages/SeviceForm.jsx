// components/ServiceForm.js
import React, { useState } from 'react';
import axios from 'axios';
import {
  Card,
  Input,
  Textarea,
  Button,
  Typography,
} from "@material-tailwind/react";
import newRequest from '../utils/newRequest';
import { Navigate } from 'react-router-dom';
import { GetUser } from '../utils/handleUser';
import { useNavigate } from 'react-router-dom';


const ServiceForm = ({ onSubmit }) => {
  const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [totalStars, setTotalStars] = useState(0);
    const [catid, setCatId] = useState('');
    const [cat, setCat] = useState('');
    const [price, setPrice] = useState('');
    const [images, setImages] = useState([]);
    const [shortTitle, setShortTitle] = useState('');
    const [shortDesc, setShortDesc] = useState('');
    const [deliveryTime, setDeliveryTime] = useState(0);
  
    const handleServiceSubmit = async () => {

      try {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('desc', desc);
        formData.append('totalStars', totalStars);
        formData.append('catid', catid);
        formData.append('cat', cat);
        formData.append('price', price);
        formData.append('shortTitle', shortTitle);
        formData.append('shortDesc', shortDesc);
        formData.append('deliveryTime', deliveryTime);
        formData.append('userId', GetUser()._id);
        formData.append('role', GetUser().Role);


        for (let i = 0; i < images.length; i++) {
          formData.append('images', images[i]);
        }
    
  
        // Assume you have a server endpoint for creating a service
        const response = await newRequest.post('/service', formData,{
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
  
        const data = response.data;
        console.log(data);
        navigate('/');
    
      } catch (error) {
        // Handle error, e.g., show an error message
        console.error('Service creation failed', error);
      }
 

    };
  
    // Handle file selection for the images
    const handleImageChange = (e) => {
      const selectedImages = Array.from(e.target.files);
      setImages(selectedImages);
    };
  
  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray" className="text-center p-3" style={{ background: "rgba(213, 209, 255, 0.54) " }}>
        <span className="text-light-blue-500">Create Service</span>
      </Typography>
      <form className="mt-8 mb-2 w-96 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Service Title
          </Typography>
          <Input
            size="lg"
            placeholder="Service Title"
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Description
          </Typography>
          <Textarea
            size="lg"
            placeholder="Service Description"
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />

          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Total Stars
          </Typography>
          <Input
            type="number"
            size="lg"
            placeholder="Total Stars"
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={totalStars}
            onChange={(e) => setTotalStars(Number(e.target.value))}
          />

          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Category ID
          </Typography>
          <Input
            size="lg"
            placeholder="Category ID"
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={catid}
            onChange={(e) => setCatId(e.target.value)}
          />

          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Category
          </Typography>
          <Input
            size="lg"
            placeholder="Category"
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={cat}
            onChange={(e) => setCat(e.target.value)}
          />

          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Price
          </Typography>
          <Input
            size="lg"
            placeholder="Service Price"
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

       

<Typography variant="h6" color="blue-gray" className="-mb-3">
            Images (Select multiple files)
          </Typography>
          <Input
            type="file"
            size="lg"
            multiple
            onChange={handleImageChange}
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Short Title
          </Typography>
          <Input
            size="lg"
            placeholder="Short Title"
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={shortTitle}
            onChange={(e) => setShortTitle(e.target.value)}
          />

          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Short Description
          </Typography>
          <Textarea
            size="lg"
            placeholder="Short Description"
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={shortDesc}
            onChange={(e) => setShortDesc(e.target.value)}
          />

          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Delivery Time (in hours)
          </Typography>
          <Input
            type="number"
            size="lg"
            placeholder="Delivery Time"
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={deliveryTime}
            onChange={(e) => setDeliveryTime(Number(e.target.value))}
          />

        </div>

        <Button className="mt-6 bg-blue-500" fullWidth onClick={handleServiceSubmit}>
          Create Service
        </Button>
      </form>
    </Card>
  );
};

export default ServiceForm;
