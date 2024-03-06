import { Card, Typography } from "@material-tailwind/react";
 

 
export function TableWithStripedRows({TABLE_ROWS,TABLE_HEAD}) {
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
          {TABLE_ROWS.map(({ title, id, description,cover,location }, index) => (
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
                  {description}
                </Typography>
              </td>
              <td className="p-4">
                <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                  Edit
                </Typography>
              </td>
              <td className="p-4">
                <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                  Delete
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}