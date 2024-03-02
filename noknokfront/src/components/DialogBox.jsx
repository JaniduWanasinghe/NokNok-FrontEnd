import React from "react";
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
 
export function DialogWithForm({status,handleopen}) {
const open=status 
  return (
    <>
    
      <Dialog
        size="xs"
        open={open}
        handler={handleopen}
        className="bg-transparent shadow-none"
      >
                    <form action="">

        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
            Send a Message
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
            <Input label="Location" size="lg" />
            <Typography className="-mb-2" variant="h6">
              Your Message
            </Typography>
            <Textarea label="message" size="lg" />
          
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={handleopen} fullWidth>
send a message            </Button>
           
          
          </CardFooter>

        </Card>
        </form>
      </Dialog>
    </>
  );
}