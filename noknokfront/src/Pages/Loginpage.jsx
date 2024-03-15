import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import newRequest from '../utils/newRequest';

export function SimpleLoginForm() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await newRequest.post('/auth/login', {
        username,
        password,
      });
   
      const data = response.data;
      
console.log(data);
      // Assume `data` contains user information from the server response
      const userInfo= data;
      localStorage.setItem('user', JSON.stringify(userInfo));

      

      // Redirect to the home page
      navigate('/');
    } catch (error) {
      // Handle error, e.g., show an error message
      console.error('Login failed', error);
    }
  };

  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray" className="text-center p-3" style={{ background: "rgba(213, 209, 255, 0.54) " }}>
        <span className="text-light-blue-500">Login</span> / Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to Login.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your User Name
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            size="lg"
            placeholder="********"
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <a
                href="#"
                className="font-medium transition-colors hover:text-gray-900"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button className="mt-6 bg-blue-500" fullWidth onClick={handleLogin}>
          Sign In
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Don't have an account?{" "}
          <a href="/signup" className="font-medium text-gray-900">
            Sign up
          </a>
        </Typography>
      </form>
    </Card>
  );
}
