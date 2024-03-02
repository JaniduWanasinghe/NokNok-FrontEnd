import {
    List,
    ListItem,
    ListItemPrefix,
    Avatar,
    Card,
    Typography,
  } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import newRequest from "../utils/newRequest";
import { GetUser } from "../utils/handleUser";
   
  export function ConversationSection() {
    const [loading, setLoading] = useState(true);
const [Cdata,setCdata]=useState()
    
  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const response =await newRequest.get(`conversations/all/${GetUser()._id}`);
        console.log(response)
        const data = response.data;
setCdata(data)
        setLoading(false);
      } catch (error) {
        console.error('Error fetching services', error);
      }
    };

    fetchConversations();
  }, []);

  if(loading){
    return(  <p>Loading...</p>)
  }
  let color="gray"
  if(GetUser.Role=="provider" ){
    if(!Cdata.sellerread){
        color="blue"
    }
  }
 else{
    if(!Cdata.buyerread){
        color="blue"
    }
  }
    return (
      <Card className="w-96">
        <List>
            {Cdata.map((con)=>(
 <ListItem>
 <ListItemPrefix>
   <Avatar variant="circular" alt="candice" src="https://docs.material-tailwind.com/img/face-1.jpg" />
 </ListItemPrefix>
 <div>
   <Typography variant="h6" color="blue-gray">
     {GetUser()._id===con.buyerId._id?con.sellerId.username:con.buyerId.username}
   </Typography>
   <Typography variant="small" color={color} className="font-normal">
{con.lastMessage}   </Typography>
 </div>
</ListItem>
            )
            )}
         
          
        </List>
      </Card>
    );
  }