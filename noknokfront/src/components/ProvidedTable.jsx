import { Button, Card, Chip, Typography } from "@material-tailwind/react";
import newRequest from "../utils/newRequest";
import { ReviewDialog } from "./ReviewDialog";
import React, { useState } from "react";
import { GetUser } from "../utils/handleUser";
import { NoteDialog } from "./NoteDoialogBox";

 

 
export function ProvidedTable({TABLE_ROWS,TABLE_HEAD}) {

    const [open, setOpen] = React.useState(false);
    const [servicedata, setService]= React.useState();

    const handleOpen = (servicedata) => {
        setService(servicedata)
        console.log(servicedata)
        setOpen((cur) => !cur)};


    const updateHiredstatus = async (taskId, status) => {
 
        try {
          const response = await newRequest.patch(`hired-tasks/change-status/${taskId}`, {
            status,
          });
      
          console.log('Backend response:', response.data);
          window.location.reload();

          // return response.data;
        } catch (error) {
          console.error('Error updating payment status:', error);
          throw error; 
        }
      };
  return (
    <div>
        <NoteDialog status={open} handleopen={handleOpen} service={servicedata}/>
   
    <Card className="h-full w-full overflow-auto flex justify-center items-center">

      <table className="w-full min-w-max table-auto text-left max-w-5xl">
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
          {TABLE_ROWS.map(({ title, id, total,cover,location,status,payment,sellerId,buyerId,review ,rating,note}, index) => (
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
              
                {status==="done"?<Chip color="green" value={status}/>:(status==="pending"?(<Chip color="amber" value={status}/>):<Chip color="blue" value={status} />)}
              
                {/* <Typography variant="small" color="blue-gray" className="font-normal">
                  {status}
                </Typography> */}
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                {payment==="Pending"?(<Chip color="amber" value={payment}/>):<Chip color="blue" value={payment} />}
                </Typography>
              </td>

              <td className="p-4">
                <Button onClick={()=>handleOpen({id:id,review:review,rating:rating,note:note})}>Show Note</Button>

              </td>
              
{status==="pending" && (<td className="p-4">
                <Button onClick={()=>updateHiredstatus(id,"Accepted")} className="mr-3 " color="blue">Accept</Button>
                <Button onClick={()=>updateHiredstatus(id,"Rejected")} color="red">Reject</Button>
              </td>)}
               </tr>
          ))}
        </tbody>
      </table>
    </Card>
    </div>
  );
}