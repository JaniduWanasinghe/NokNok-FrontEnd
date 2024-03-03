import React from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Textarea,
} from "@material-tailwind/react";
import CheckoutForm from "./CheckoutForm";

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51Oq7FJGxxBUoEIaMTFbwcE3weuUT5uED5u7EAYGfgxGQ4nNHy0PIeueDyyKR5oaXiHBulqZXCcL4uZZsS4mBlS0q00hxvquEwY');
export function ChheckoutDialogBox({status,handleopen,total,serviceid,hours,location}) {
const open=status 
console.log(total)
  return (
    <>
    
      <Dialog
        size="xs"
        open={open}
        handler={handleopen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem] p-10">
        <Elements stripe={stripePromise}>

         <CheckoutForm total={total}/>
         </Elements>
        </Card>
      </Dialog>
    </>
  );
}