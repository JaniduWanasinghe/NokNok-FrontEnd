import React, { useState } from "react";
import { Button, Dialog, Card, CardBody, CardFooter, Typography, Textarea, Input, Chip } from "@material-tailwind/react";
import newRequest from "../utils/newRequest";
//test
export function NoteDialog({ status, handleopen,service}) {
  
if(!service){
    return <>loading...</>
}
console.log(service)
  return (
    <>
      <Dialog size="xs" open={open} handler={handleopen} className="bg-transparent shadow-none">
        <form action="">
          <Card className="mx-auto w-full max-w-[24rem]">
            <CardBody className="flex flex-col gap-4">
              <Typography variant="h4" color="blue-gray">
Note              </Typography>

            <div className="p-3 border-2 ">
            <Typography className="-mb-2" variant="p" color="blue">
            {service.note}
              </Typography>
            </div>

              <Typography variant="h4" color="blue-gray">
Review              </Typography>
<div className="p-3 border-2 ">
              <Typography className="-mb-2" variant="p" color="blue">
               {service.review}
              </Typography>
              </div>
              <Typography variant="h4" color="blue-gray">
Rating              </Typography>

              <Typography className="-mb-2" color="blue" variant="p">
              {service.rating<3?(<Chip color="amber" value={service.rating}/>):<Chip color="blue" value={service.rating} />}
             
              </Typography>

            </CardBody>
            <CardFooter className="pt-0">
          
            </CardFooter>
          </Card>
        </form>
      </Dialog>
    </>
  );
}