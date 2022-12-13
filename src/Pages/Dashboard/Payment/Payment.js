import { Elements  } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom'
import CheckOut from './CheckOut';
const stripePromise = loadStripe('pk_test_51MArUhHTpDDkKba6z5Ncrv1QNzGFJiCihhnSE3ntAWAIHMEWjMD1yufZp70Jet3XDvbZCI5ndLtoBBrYinOIwBdO00Aq7ljP8C');




const Payment = () => {
    const booking = useLoaderData()
    const { title } = booking



    return (
        <div>
            <h1 className="text-3xl font-bold mt-5 text-center text-pink-600">{title}</h1>

            <div className='my-16'>
                <Elements stripe={stripePromise}>
                    <CheckOut
                    booking={booking}
                    ></CheckOut>
                </Elements>
            </div>

        </div>
    );
};

export default Payment;