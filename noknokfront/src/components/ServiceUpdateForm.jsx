// components/UpdateServiceForm.js
import React, { useEffect, useState } from 'react';
import {
  Card,
  Input,
  Textarea,
  Button,
  Typography,
} from "@material-tailwind/react";
import newRequest from '../utils/newRequest';
import { GetUser } from '../utils/handleUser';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateServiceForm = ({serviceId}) => {
  const navigate = useNavigate();

  const [service, setService] = useState({});
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await newRequest.get(`/service/${serviceId}`);
        const serviceData = response.data;
        setService(serviceData);
      } catch (error) {
        console.error('Error fetching service:', error);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await newRequest.get("/category");
        const data = response.data;
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchService();
    fetchCategories();
  }, [serviceId]);

  const [title, setTitle] = useState(service.title || '');
  const [desc, setDesc] = useState(service.desc || '');
  const [totalStars, setTotalStars] = useState(service.totalStars || 0);
  const [catid, setCatId] = useState(service.catid || '');
  const [cat, setCat] = useState(service.cat || '');
  const [price, setPrice] = useState(service.price || '');
  const [images, setImages] = useState([]);
  const [shortTitle, setShortTitle] = useState(service.shortTitle || '');
  const [shortDesc, setShortDesc] = useState(service.shortDesc || '');
  const [deliveryTime, setDeliveryTime] = useState(service.deliveryTime || 0);
  const [selectedCategory, setSelectedCategory] = useState(service.catid || '');

  const handleServiceUpdate = async () => {
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

      const response = await newRequest.put(`/service/${serviceId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const updatedService = response.data;
      console.log(updatedService);
      navigate('/');
    } catch (error) {
      console.error('Service update failed', error);
    }
  };

  const handleImageChange = (e) => {
    const selectedImages = Array.from(e.target.files);
    setImages(selectedImages);
  };

  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray" className="text-center p-3" style={{ background: "rgba(213, 209, 255, 0.54) " }}>
        <span className="text-light-blue-500">Update Service</span>
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

          {/* Add more form fields here similar to the creation form */}
          {/* For example: */}
          {/* <Typography variant="h6" color="blue-gray" className="-mb-3">
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

          {/* Add more form fields here as needed */}

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

        <Button className="mt-6 bg-blue-500" fullWidth onClick={handleServiceUpdate}>
          Update Service
        </Button>
      </form>
    </Card>
  );
};

export default UpdateServiceForm;
