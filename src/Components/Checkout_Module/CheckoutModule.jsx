import React,{useState} from 'react'
import CheckoutForm from './CheckoutForm';
import OrderSummary from './OrderSummary';
import PaymentOptions from './PaymentOptions';
import { useCart } from '../Cart_Module/CartContext'

const CheckoutModule = () => {
  const{cartItems,totalPrice}=useCart();
  const[shippingDetails,setShippingDetails]=useState(null);

  const handleShippingDetails = (details) => {
    setShippingDetails(details);
  };

  const handlePayment = (method) => {
    alert(`Payment successful with ${method}!`);
    console.log("Order Summary:", cartItems, shippingDetails, totalPrice);
  };

  return (
    <div className="checkout-module container py-5">
    {!shippingDetails ? (
      <CheckoutForm onSubmit={handleShippingDetails} />
    ) : (
      <>
        <OrderSummary cartItems={cartItems} totalPrice={totalPrice} />
        <PaymentOptions onPayment={handlePayment} />
      </>
    )}
  </div>
  )
}

export default CheckoutModule