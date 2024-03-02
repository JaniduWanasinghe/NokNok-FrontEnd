// components/ServiceForm.js
import React, { useEffect, useState } from 'react';
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

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories when the component mounts
    const fetchCategories = async () => {
      try {
        const response = await newRequest.get("/category");
        const data =  response.data;

        // Update the state with the fetched categories
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []); 



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
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleServiceSubmit = async () => {

      try {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('desc', desc);
        formData.append('totalStars', totalStars);
        // formData.append('catid', catid);
        // formData.append('cat', cat);
        formData.append('price', price);
        formData.append('shortTitle', shortTitle);
        formData.append('shortDesc', shortDesc);
        formData.append('deliveryTime', deliveryTime);
        formData.append('userId', GetUser()._id);
        formData.append('role', GetUser().Role);
        if (selectedCategory) {
          const selectedCategoryObject = categories.find(category => category._id === selectedCategory);
          if (selectedCategoryObject) {
            formData.append('catid', selectedCategoryObject._id);
            formData.append('cat', selectedCategoryObject.title);
          }
        }
  


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
        Category
      </Typography>
      <select
        size="lg"
        className="!border-t-blue-gray-200 focus:!border-t-gray-900"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">Select Category</option>
        {categories.map(category => (
          <option key={category._id} value={category._id}>
            {category.title}
          </option>
        ))}
      </select>

{/* 
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
          /> */}

          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Price per hour
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


        </div>

        <Button className="mt-6 bg-blue-500" fullWidth onClick={handleServiceSubmit}>
          Create Service
        </Button>
      </form>
    </Card>
  );
};

export default ServiceForm;
