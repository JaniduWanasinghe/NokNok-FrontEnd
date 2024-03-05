

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
    List,
    ListItem,
  } from "@material-tailwind/react";
import { GetUser } from "../utils/handleUser";
import { getPublicUrl } from "../utils/PublicUrl";
import HotActions from "./HotActions";
   
  export function ProfileCard2({user}) {
    return (
      <Card className="w-96">
        <CardHeader floated={false} className="h-80">
          <img src={user.img?getPublicUrl(user.img):`https://docs.material-tailwind.com/img/team-3.jpg`} alt="profile-picture" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {user.username}
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
{user.country}          </Typography>

<Card >
      <List>
        <ListItem >
          Mobile: {user.phone}
        </ListItem>
        <ListItem >
          Email:{user.email}
        </ListItem>
      
      </List>


    </Card>

    <HotActions/>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2">
          <Tooltip content="Like">
            <Typography
              as="a"
              href="#facebook"
              variant="lead"
              color="blue"
              textGradient
            >
              <i className="fab fa-facebook" />
            </Typography>
          </Tooltip>
          <Tooltip content="Follow">
            <Typography
              as="a"
              href="#twitter"
              variant="lead"
              color="light-blue"
              textGradient
            >
              <i className="fab fa-twitter" />
            </Typography>
          </Tooltip>
          <Tooltip content="Follow">
            <Typography
              as="a"
              href="#instagram"
              variant="lead"
              color="purple"
              textGradient
            >
              <i className="fab fa-instagram" />
            </Typography>
          </Tooltip>

        </CardFooter>
      </Card>
    );
  }