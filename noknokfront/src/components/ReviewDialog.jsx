import React, { useState } from "react";
import { Button, Dialog, Card, CardBody, CardFooter, Typography, Textarea, Input } from "@material-tailwind/react";
import newRequest from "../utils/newRequest";
//test
export function ReviewDialog({ status, handleopen,id }) {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");

  const open = status;

  const handleSendReview = async () => {
    try {
   
        const response = await newRequest.post(`hired-tasks/add-review/${id}`, {
          reviews:review,
          totalStars:rating
          });
    
          // Handle the response as needed
          console.log(response.data);
    
          // Close the dialog
          handleopen();
      // Close the dialog
    } catch (error) {
      console.error("Error sending review:", error);
      // Handle the error as needed
    }
  };

  return (
    <>
      <Dialog size="xs" open={open} handler={handleopen} className="bg-transparent shadow-none">
        <form action="">
          <Card className="mx-auto w-full max-w-[24rem]">
            <CardBody className="flex flex-col gap-4">
              <Typography variant="h4" color="blue-gray">
                Send a Review
              </Typography>

              <Typography className="-mb-2" variant="h6">
                Your Review
              </Typography>
              <Textarea label="review" size="lg" value={review} onChange={(e) => setReview(e.target.value)} />

              
              <Typography className="-mb-2" variant="h6">
                Your Rating
              </Typography>
              <Input label="review" size="lg" type="number" max={5} min={0} value={rating} onChange={(e) => setRating(e.target.value)} />

            </CardBody>
            <CardFooter className="pt-0">
                
              <Button variant="gradient" onClick={handleSendReview} fullWidth>
                Send a review
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Dialog>
    </>
  );
}