import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  export function CardWithLink({title,description,icon}) {
    return (
      <Card  className=" mt-6 max-w-80 " style={{background:"rgba(27, 132, 224, 0.08)"}}>
        <CardBody >
            <div className="h-24"> 
            <img src={icon} alt="" className="h-100" />

            </div>
    
          <Typography variant="h5" color="blue-gray" className="mb-2">
           {title}
          </Typography>
          <Typography>
        {description}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
                  </CardFooter>
      </Card>
    );
  }