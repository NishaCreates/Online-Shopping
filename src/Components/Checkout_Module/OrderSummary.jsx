import React from 'react'

const OrderSummary = ({cartItems,totalPrice}) => {
  
    return (
    <div className='order-summary'>
    <h3>Order Summary</h3>
     <ul className='list-group'>
        {cartItems.map((item)=>(
            <li key={item.id} className='list-group-item d-flex justify-content-between align-item-center'>
            {item.name} (x{item.quantity})
            <span>₹{item.price * item.quantity}</span>
            </li>
        ))}
     </ul>
     <h4 className="mt-3">Total Price: ₹{totalPrice}</h4>
    </div>
  )
}

export default OrderSummary