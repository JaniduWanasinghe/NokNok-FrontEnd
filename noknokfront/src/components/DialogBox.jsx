import React, { useState } from "react";
import { Button, Dialog, Card, CardBody, CardFooter, Typography, Textarea } from "@material-tailwind/react";
import newRequest from "../utils/newRequest";
//test
export function DialogWithForm({ status, handleopen, sellerId, buyerId }) {
  const [message, setMessage] = useState("");
console.log(sellerId)
  const open = status;

  const handleSendMessage = async () => {
    try {
      const response = await newRequest.post("/conversations", {
        sellerId,
        buyerId,
        senderId:buyerId,
        text: message,
      });

      // Handle the response as needed
      console.log(response.data);

      // Close the dialog
      handleopen();
    } catch (error) {
      console.error("Error sending message:", error);
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
                Send a Message
              </Typography>

              <Typography className="-mb-2" variant="h6">
                Your Message
              </Typography>
              <Textarea label="message" size="lg" value={message} onChange={(e) => setMessage(e.target.value)} />

            </CardBody>
            <CardFooter className="pt-0">
              <Button variant="gradient" onClick={handleSendMessage} fullWidth>
                Send a message
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Dialog>
    </>
  );
}