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
 
export function ChheckoutDialogBox({status,handleopen}) {
const open=status 
  return (
    <>
    
      <Dialog
        size="xs"
        open={open}
        handler={handleopen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
         <CheckoutForm/>
        </Card>
      </Dialog>
    </>
  );
}