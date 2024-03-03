import React, { useState } from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Textarea,
} from "@material-tailwind/react";
import axios from "axios"; // Import Axios library or use your preferred HTTP client
import { GetUser } from "../utils/handleUser";

export function HireserviceDialogBox({
  status,
  handleopen,
  handleSwitch,
  setTotal,
  rate,
  serviceId
}) {
  const open = status;
  const [hours, setHours] = useState(0);
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create an object with form data
    const formData = {
      location,
      hours,
      message,
      user: GetUser(),
      serviceId

    };

    try {
      // Make an HTTP POST request to your backend API endpoint
      const response = await axios.post("/your-backend-api-endpoint", formData);

      // Handle the response from the backend if needed
      console.log("Backend response:", response.data);

      // Switch to the desired state after successful form submission
      handleSwitch();
    } catch (error) {
      // Handle any errors that occur during the HTTP request
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <Dialog
        size="xs"
        open={open}
        handler={handleopen}
        className="bg-transparent shadow-none"
      >
        <form onSubmit={handleSubmit}>
          <Card className="mx-auto w-full max-w-[24rem]">
            <CardBody className="flex flex-col gap-4">
              <Typography variant="h4" color="blue-gray">
                Hire Service
              </Typography>
              <Typography
                className="mb-3 font-normal"
                variant="paragraph"
                color="gray"
              >
                Enter your Location.
              </Typography>
              <Typography className="-mb-2" variant="h6">
                Your Location
              </Typography>
              <Input
                label="Location"
                size="lg"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <Typography className="-mb-2" variant="h6">
                No of Hours
              </Typography>
              <Input
                label="Hours"
                size="lg"
                value={hours}
                required
                onChange={(e) => {
                  setHours(e.target.value);
                  setTotal(rate * e.target.value);
                }}
              />
              <Typography className="-mb-2" variant="h6">
                Your Note
              </Typography>
              <Textarea
                label="message"
                size="lg"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Typography className="mt-2" variant="h6">
                Rs {(rate * hours).toFixed(2)}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button variant="gradient" type="submit" fullWidth>
                Hire Service
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Dialog>
    </>
  );
}
