import React from 'react';
import {useLocation,Link} from "react-router-dom"

const OrdersDetails = () => {
  const location = useLocation();
  const order = location.state?.order;

  if(!order){
    return(
        <div className='text-center py-5'>
            <h2>No Order Details Found</h2>
            <Link to="/" className='btn btn-primary'>
               Go to Home
            </Link>
        </div>
    )
  }

  return (
    <div className='order-details container py-5'>
      <h2 className='mb-4 text-center'>Order Summary</h2>
      <div className='card'>
        <div className='card-header'>
            <h5>Order ID:{order.id}</h5>
            <p>Status:<strong>{order.status}</strong></p>
        </div>
        <div className='card-body'>
            <h4>Items:</h4>
            <ul className="list-group mb-4">
            {order.items.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div>
                  <strong>{item.name}</strong>
                  <p className="mb-1">Price: ₹{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: "90px", height: "90px", objectFit: "cover" }}
                />
              </li>
            ))}
          </ul>
          <h5>Shipping Information:</h5>
          <p>Name: {order.shipping.name}</p>
          <p>Address: {order.shipping.address}</p>
          <p>Phone: {order.shipping.phone}</p>

          <h4 className="mt-4">Total: ₹{order.total}</h4>
        </div>
      </div>

      <div className="text-center mt-4">
        <Link to="/Home" className="btn btn-success">
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default OrdersDetails