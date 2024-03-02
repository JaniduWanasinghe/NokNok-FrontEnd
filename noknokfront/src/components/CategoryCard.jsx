import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
  } from "@material-tailwind/react";
import { getPublicUrl } from "../utils/PublicUrl";
import { StarIcon } from "@heroicons/react/24/outline";
import React from "react";
   
  export function CategoryCard({title,Scount,cover}) {
    return (
      <Card className="max-w-[24rem] overflow-hidden">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none"
        >
          <img
            src={getPublicUrl(cover)}
            alt="ui/ux review check"
          />
        </CardHeader>
        <CardBody>
            <div className="flex justify-between">
            <Typography variant="h4" color="blue-gray">
{title}
          </Typography>  
          <div className="flex">

        
          <Typography variant="h4" color="blue-gray">

5 

          </Typography>  
          {React.createElement(StarIcon, {
              strokeWidth: 2,
              fill:"gold",
              className: "h-6 text-gold-300 w-6 fill-gold-900 ",
            })}
       
          </div>
            </div>
         
          <Typography variant="lead" color="gray" className="mt-3 font-normal">
        {Scount}
          </Typography>
        </CardBody>
        <CardFooter className="flex items-center justify-between">
          <div className="flex items-center -space-x-3">
      
     
          </div>
          <Typography className="font-normal">January 10</Typography>
        </CardFooter>
      </Card>
    );
  }