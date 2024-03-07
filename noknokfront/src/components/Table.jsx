import { Card, Typography, Button } from "@material-tailwind/react";
import newRequest from '../utils/newRequest';

export function TableWithStripedRows({ TABLE_ROWS, TABLE_HEAD }) {
  const handleDelete = async (id) => {
    try {
      await newRequest.delete(`/service/${id}`);

      console.log(`Service with ID ${id} deleted successfully`);
      window.location.reload()
    } catch (error) {
      console.error('Error deleting service:', error);
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
            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal leading-none opacity-70"
              >
                Actions
              </Typography>
            </th>
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ title, id, description, cover, location }, index) => (
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
                <a href={`service/update/${id}`}>
                  <Typography as="a" href={`/service/update/${id}`} variant="small" color="blue-gray" className="font-medium">
                    Edit
                  </Typography>
                </a>
              </td>
              <td className="p-4">
                <Button
                  color="red"
                  onClick={() => handleDelete(id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
