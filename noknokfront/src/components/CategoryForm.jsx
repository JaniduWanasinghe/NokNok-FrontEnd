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

export function CreateCategoryForm() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [cover, setCover] = useState(null); // Use null to represent no file selected

  const handleCreateCategory = async () => {
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('desc', desc);
      formData.append('cover', cover);
      formData.append('scount', "0");
      formData.append('role',GetUser().Role)

      const response = await newRequest.post('/category', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const data = response.data;
      console.log(data);


      navigate('/categories');
    } catch (error) {
      console.error('Category creation failed', error);
    }
  };

  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray" className="text-center p-3" style={{ background: "rgba(213, 209, 255, 0.54) " }}>
        Create Category
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Category Title
          </Typography>
          <Input
            size="lg"
            placeholder="Category Title"
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
          <Input
            size="lg"
            placeholder="Category Description"
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />

          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Cover Image
          </Typography>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setCover(e.target.files[0])}
          />

        </div>

        <Button className="mt-6 bg-blue-500" fullWidth onClick={handleCreateCategory}>
          Create Category
        </Button>
      </form>
    </Card>
  );
}
