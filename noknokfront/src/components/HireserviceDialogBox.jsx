
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
 
export function HireserviceDialogBox({status,handleopen,handleSwitch,setTotal,rate}) {
const open=status 
const [hours, setHours] = useState(0);
console.log(rate)
const handleSubmit=(e)=>{
handleSwitch()
}

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
            <Input label="Location" size="lg" required />
            <Typography className="-mb-2" variant="h6">
              No of Hours
            </Typography>
            <Input
              label="Hours"
              size="lg"
              value={hours}
              required
              onChange={(e) => {
                
              setHours(e.target.value)
            setTotal(rate*e.target.value)
            }}
            />      
                  <Typography className="-mb-2" variant="h6">
              Your Note
            </Typography>
            <Textarea label="message" size="lg" />
            <Typography className="mt-2" variant="h6">
             Rs {rate*hours}
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={handleSubmit} fullWidth>
Hire Service         </Button>
           

          </CardFooter>

        </Card>
        </form>
      </Dialog>
    </>
  );
}