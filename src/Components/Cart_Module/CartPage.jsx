import React from 'react';
//import CartItem from './CartItem';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const navigate=useNavigate();
  const handleCheckout=()=>{
    navigate("/CheckoutModule");
  }
     const{cartItems,incrementQuantity,decrementQuantity,removeFromCart}=useCart() ;

  const totalPrice = cartItems.reduce((total,item)=>total + item.price * item.quantity,0);
    
  return (
    <div className='cart-page py-5'>
        <div className="container">
      <h2 className="mb-4 text-center">Your Cart</h2>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div key={item.id} className="card mb-3">
            <div className="row g-0">
              <div className="col-md-3 d-flex align-items-center">
                <img 
                src={item.image} 
                className="img-fluid rounded-start" 
                alt={item.name} 
                style={{ maxHeight: '150px' }}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">Price: ₹{item.price}</p>
                  <div className='d-flex align-items-center gap-2'>
                    <button
                    className='btn btn-outline-danger btn-sm me-2'
                    onClick={()=>decrementQuantity(item.id)}
                    >
                      -
                    </button>
                    <span className='fw-bold'>{item.quantity}</span>
                    <button
                        className="btn btn-outline-success btn-sm ms-2"
                        onClick={() => incrementQuantity(item.id)}
                      >
                        +
                      </button>
                      <div className="col-md-3 d-flex align-items-center justify-content-center">
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeFromCart(item.id)}
                  >
                    &times;
                  </button>
                  </div>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        ))
      ) : (
        <p>Your cart is empty!</p>
      )}
    </div>

    <div className="d-flex justify-content-between align-items-center">
    <h4 className="text-primary mb-0">Total Price: ₹{totalPrice}</h4>
     <button className="btn btn-success" onClick={handleCheckout}>Proceed to Checkout</button>
    </div>

             </div>
        )
    }
  

export default CartPage