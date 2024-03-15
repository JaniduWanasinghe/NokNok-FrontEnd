// CategoriesTable.jsx
import React, { useEffect, useState } from 'react';
import { Card, Typography, Button } from "@material-tailwind/react";
import newRequest from '../utils/newRequest';
import { getPublicUrl } from '../utils/PublicUrl';

const CategoriesTable = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await newRequest.get('/category');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    // Call the fetchCategories function
    fetchCategories();
  }, []);

  const handleDelete = async (id) => {
    try {
      await newRequest.delete(`/category/${id}`);
      console.log(`Category with ID ${id} deleted successfully`);
      window.location.reload();
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  return (
    <Card className="h-full w-full overflow-auto flex justify-center items-center">
      <table className="w-full min-w-max table-auto text-left max-w-5xl">
        <thead>
          <tr>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal leading-none opacity-70"
              >
                Category Title
              </Typography>
            </th>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal leading-none opacity-70"
              >
                Category Description
              </Typography>
            </th>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal leading-none opacity-70"
              >
                Category Cover
              </Typography>
            </th>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal leading-none opacity-70"
              >
                Service Count
              </Typography>
            </th>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal leading-none opacity-70"
              >
                Actions
              </Typography>
            </th>
          </tr>
        </thead>
        <tbody>
          {categories.map(({ _id, title, desc, cover, scount }) => (
            <tr key={_id} className="even:bg-blue-gray-50/50">
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {title}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {desc}
                </Typography>
              </td>
              <td className="p-4">
                <img
                  className="h-16 w-16 rounded-full object-cover object-center"
                  src={getPublicUrl(cover)}
                  alt="category cover"
                />
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {scount}
                </Typography>
              </td>
              <td className="p-4">
                <Button
                  color="red"
                  onClick={() => handleDelete(_id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export default CategoriesTable;
