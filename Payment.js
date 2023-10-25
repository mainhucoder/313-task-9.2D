import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './Payment.css';
import { useNavigate } from 'react-router-dom';

const Payment = ({ amount, setEmail }) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigator = useNavigate();
  const [email, setEmailLocal] = useState('');
const handleclick=()=>{
  if(email==='')
  {
    alert("Fill the credentials")
    navigator('/payment')
  }
  else{

    alert("SUCCESSFULL PAYMENT DONE");
    navigator('/');
  }
}
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    // Create a PaymentMethod using the card information
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.error(error);
    } else {
      console.log('PaymentMethod:', paymentMethod);
      setEmail(email);
    }
  };

  return (
    <div className="payment-container">
      <h1 className="payment-title">Payment Page</h1>
      <form onSubmit={handleSubmit} className="payment-form">
        <label className="payment-label">Card Number:</label>
        <CardElement className="payment-input" />

        <label className="payment-label">Email Address:</label>
        <input
          type="email"
          className="payment-input"
          value={email}
          onChange={(e) => setEmailLocal(e.target.value)}
          required
        />

        <button type="submit" onClick={handleclick} className="payment-button">Make Payment (${amount})</button>
      </form>
    </div>
  );
};

export default Payment;