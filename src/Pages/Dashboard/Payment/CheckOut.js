import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

const CheckOut = ({booking}) => {
    const {price, email, name, _id} = booking
    const [error, setError] = useState('')
    const [sucess, setSuccess] = useState('')
    const [tax, setTax] = useState('')
    const [clientSecret, setClientSecret] = useState("");

    useEffect(()=>{
        fetch(`http://localhost:5000/create-payment-intent`,{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({price})
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setClientSecret(data.clientSecret)
        })
        .catch(e => console.error(e))
    }, [price])


    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!stripe || !elements) {
            return
        }


        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
          }
    
    
          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });


          if(error){
            setError(error.message)
          }
          else{
            setError('')
          }



          const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: name,
                  email: email
                },
              },
            },
          );

          if(confirmError){
            setError(confirmError.message)
          }

          console.log(paymentIntent)
          if(paymentIntent.status === "succeeded"){
            setSuccess('sucessful payment')
            setTax(paymentIntent.id)

            const pay ={
              bookingId: _id,
              price,
              email
            }
            
            fetch('http://localhost:5000/payment',{
              method: 'POST',
              headers: {
                'Content-type': 'application/json'
              },
              body: JSON.stringify(pay)
            })
            .then(res => res.json())
            .then(data =>{
              console.log(data)
            })
            .catch(e => console.error(e))
          }
          

    }

   

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-xs  bg-gradient-to-r from-blue-600 to-blue-600 my-10' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            <p className="text-red-600">{error}</p>
            {
                sucess && <>
                <p className="text-green-600 font-bold">{sucess}</p>
                <p className="text-green-600 font-bold">{tax}</p>
                </>
            }
        </div>
    );
};

export default CheckOut;