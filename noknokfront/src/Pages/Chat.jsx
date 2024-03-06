import React, { useEffect, useState } from 'react'
import Chatbubble from '../components/Chatbubble'
import { InputWithButton } from '../components/Inputbox'
import { GetUser } from '../utils/handleUser';
import { useParams } from 'react-router';
import newRequest from '../utils/newRequest';
import { Button, Input } from '@material-tailwind/react';

export default function Chat
() {
    const [inputMessage, setInputMessage] = useState('');

    const {id}=useParams()
    const [loading, setLoading] = useState(true);
const [Cdata,setCdata]=useState()
const formatMessageTime = (timestamp) => {
    const date = new Date(timestamp);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };
  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Assuming you have an API endpoint to send a message
      const response = await newRequest.post(`conversations/`, {
        sellerId:Cdata.sellerId._id,
        
        buyerId:Cdata.buyerId._id,
        text: inputMessage,
        senderId: GetUser()._id,
      });

      const newMessage = response.data; // Assuming the API returns the new message object

      // Update the state with the new message
      setCdata((prevData) => ({
        ...prevData,
        messages: [ ...newMessage.messages],
      }));

      // Clear the input field
      setInputMessage('');
    } catch (error) {
      console.error('Error sending message', error);
    }
  };

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const response =await newRequest.get(`conversations/${id}`);
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
  return (
    <div className='w-full flex justify-center items-center p-10 mx-auto text-center flex-col'>
        <h1 className='mb-14'>     {GetUser()._id===Cdata.buyerId._id?Cdata.sellerId.username:Cdata.buyerId.username}
</h1>
        <div className='max-w-screen-lg w-full flex flex-col justify-center items-center bg-blue-gray-200 p-5 rou'>
            {Cdata.messages.map((message)=>{
                if(message.senderId===GetUser()._id){
                    return (<div className='flex justify-end w-full '><Chatbubble message={message.text} time={formatMessageTime(message.createdAt)} /></div>
                    )
                }
                else{
                    return(<div className='flex justify-start w-full '><Chatbubble message={message.text} time={formatMessageTime(message.createdAt)}/></div>
                    )
                }
            })}

<div className={`relative flex w-full max-w-[32rem] mt-12`}>
          <form onSubmit={handleSubmit}>
          <div className={`relative flex w-full max-w-[32rem] mt-12`}>
      <Input
        type="text"
        
        value={inputMessage}
        onChange={handleInputChange}
        color="purple"
        className="pr-20 border-purple-800 min-h-12  bg-white p-10"
        containerProps={{
          className: "min-w-0",
        }} 
      />
      <Button
        size="sm"
       
        disabled={!inputMessage}
        onClick={handleSubmit}
        className={`!absolute right-1 top-1 bottom-1 rounded ${inputMessage?'bg-blue-600':"bg-deep-purple-300"} `}
      >
      send
      </Button>
    </div>
            
          </form>
        </div>

        </div>
    </div>
  )
}
