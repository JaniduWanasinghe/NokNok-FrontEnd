import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import newRequest from '../utils/newRequest';
import { CardHeader, Input, Typography } from '@material-tailwind/react';
import { CreditCardIcon } from '@heroicons/react/24/outline';
import { GetUser } from '../utils/handleUser';


export default function CheckoutForm({ total }) {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState('');
const  [pstatus,setPstatus]=useState(false)
  const handleSubmit = async (event) => {
    event.preventDefault();
    setPstatus(true)
    if (!stripe || !elements) {
      return;
    }

    // Use elements.getElement to get a reference to the CardElement
    const cardElement = elements.getElement(CardElement);

    try {
      // Create a payment intent on the server
      const response = await newRequest.post('hired-tasks/create-payment-intent', {
        total: total, // Adjust as needed
      });

      const { clientSecret } = response.data;
      setClientSecret(clientSecret);

      // Confirm the card payment on the client side
      const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: GetUser.username,
             // Replace with actual customer details
          },
        },
      });

      if (error) {
        console.error(error);
        // Handle the error (e.g., display an error message to the user)
      } else if (paymentIntent.status === 'succeeded') {
        console.log(paymentIntent);
        // Payment successful, handle accordingly
      }
    } catch (error) {
      console.error('Error creating or confirming payment intent:', error);
      // Handle the error (e.g., display an error message to the user)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
        <CardHeader
        color="gray"
        floated={false}
        shadow={false}
        className="m-0 grid place-items-center px-4 py-8 text-center mb-8"
      >
        <div className="mb-4 h-20 p-6 text-white">
        <CreditCardIcon className="h-10 w-10 text-white" />

        </div>
        <Typography variant="h5" color="white">
            {total}
        </Typography>

      </CardHeader>

      <div className='mb-10'>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 font-medium"
                  >
                    Your Email
                  </Typography>
                  <Input
                    type="email"
                    placeholder="name@mail.com"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none mb-10",
                    }}
                  />
                </div>
                <input type="text" value={GetUser()._id}  hidden />
            <CardElement className="card-element" />

    <div className='p-3 flex flex-col justify-center items-center'>
      <button type="submit" disabled={pstatus}  className="pay-now-btn bg-black w-full p-3 mt-3 text-white">
       { pstatus?"processing...":"Pay Now"}
      </button>
    </div>
    </form>
  );
}
