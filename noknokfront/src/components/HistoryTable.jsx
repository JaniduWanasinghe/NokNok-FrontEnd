import { Button, Card, Chip, Typography } from "@material-tailwind/react";
import newRequest from "../utils/newRequest";
import { ReviewDialog } from "./ReviewDialog";
import React, { useState } from "react";
import { GetUser } from "../utils/handleUser";

 

 
export function HistoryTable({TABLE_ROWS,TABLE_HEAD}) {

    const [open, setOpen] = React.useState(false);

    const handleOpen = (id) => {
        setOpen((cur) => !cur)};


  return (
    <div>
   
    <Card className="h-full w-full overflow-auto flex justify-center items-center">

      <table className="w-full min-w-max table-auto text-left max-w-lg">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ title, id, total,cover,location,status,payment,sellerId,buyerId,review }, index) => (
            <tr key={title} className="even:bg-blue-gray-50/50">
                <td className="p-4">
                <img
      className="h-16 w-16 rounded-full object-cover object-center"
      src={cover}
      alt="nature image"
    />
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {title}
                </Typography>
              </td> 
          
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {location}
                </Typography>
              </td>
              
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {total}
                </Typography>
              </td>
              <td className="p-4">
                <button >
                {status==="done"?<Chip color="green" value={status}/>:(status==="pending"?(<Chip color="amber" value={status}/>):<Chip color="blue" value={status} />)}
                </button>
                {/* <Typography variant="small" color="blue-gray" className="font-normal">
                  {status}
                </Typography> */}
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                {payment==="Pending"?(<Chip color="amber" value={payment}/>):<Chip color="blue" value={payment} />}
                </Typography>
              </td>

              
               </tr>
          ))}
        </tbody>
      </table>
    </Card>
    </div>
  );
}