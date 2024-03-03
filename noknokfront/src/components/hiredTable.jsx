import { Card, Chip, Typography } from "@material-tailwind/react";
import newRequest from "../utils/newRequest";
 

 
export function HiredTable({TABLE_ROWS,TABLE_HEAD}) {
    const updateHiredstatus = async (taskId, status) => {
        if(status==="pending"){
            status="processing"
        }
        else if(status=="processing"){
            status="done"
        }
        else{
            status="pending"
        }
        try {
          const response = await newRequest.patch(`hired-tasks/change-status/${taskId}`, {
            status,
          });
      
          console.log('Backend response:', response.data);
          navigate('/')
          // return response.data;
        } catch (error) {
          console.error('Error updating payment status:', error);
          throw error; 
        }
      };
  return (
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
          {TABLE_ROWS.map(({ title, id, total,cover,location,status,payment }, index) => (
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
                <button onClick={updateHiredstatus(id,status)}>
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
  );
}