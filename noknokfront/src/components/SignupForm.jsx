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

export function SimpleSignupForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');
  const [cover, setCover] = useState(null); 
  const [role, setRole] = useState('customer');
  const handleSignup = async () => {
    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('username', username);
      formData.append('country', country);
      formData.append('password', password);
      formData.append('phone', "phone");
      formData.append('Role', role); 

      formData.append('image', cover);

      const response = await axios.post('http://localhost:8800/api/auth/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }});

      const data = response.data;
      console.log(data);

      // Assume `data` contains user information from the server response
      const userInfo = data;

      // Redirect to the home page
      navigate('/login');
    } catch (error) {
      // Handle error, e.g., show an error message
      console.error('Signup failed', error);
    }
  };

  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray" className="text-center p-3" style={{ background: "rgba(213, 209, 255, 0.54) " }}>
        <span className="text-light-blue-500">Sign Up</span> / Login
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Welcome! Enter your details to sign up.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Email
          </Typography>
          <Input
            size="lg"
            placeholder="email@example.com"
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Username
          </Typography>
          <Input
            size="lg"
            placeholder="username"
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

          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Country
          </Typography>
          <Input
            size="lg"
            placeholder="Country"
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />

<Typography variant="h6" color="blue-gray" className="-mb-3">
            Cover Image
          </Typography>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setCover(e.target.files[0])}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Phone Number
          </Typography>
          <Input
            size="lg"
            placeholder="Phone Number"
            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
        Role
      </Typography>
      <select
        className="!border-t-blue-gray-200 focus:!border-t-gray-900 p-2"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="customer">Customer</option>
        <option value="provider">Provider</option>
      </select>
        </div>
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree to the
              <a
                href=""
                className="font-medium transition-colors hover:text-gray-900"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button className="mt-6 bg-blue-500" fullWidth onClick={handleSignup}>
          Sign Up
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <a href="/login" className="font-medium text-gray-900">
            Login
          </a>
        </Typography>
      </form>
    </Card>
  );
}
