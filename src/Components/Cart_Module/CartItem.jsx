import React from 'react';
import {useCart} from './CartContext';
 
const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity } = useCart();

  const handleQuantityChange = (event) => {
    const quantity = parseInt(event.target.value, 10);
    if (quantity > 0) {
      updateQuantity(item.id, quantity);
    }
  }

return (
  <div className="cart-item d-flex justify-content-between align-items-center py-3">
  <div className="d-flex align-items-center">
    <img src={item.image} alt={item.name} className="cart-item-image" />
    <div className="cart-item-details ms-3">
      <h5>{item.name}</h5>
      <p>Price: ₹{item.price}</p>
    </div>
  </div>
  <div className="d-flex align-items-center">
    <input
      type="number"
      value={item.quantity}
      min="1"
      className="form-control w-25"
      onChange={handleQuantityChange}
    />
    <button
      className="btn btn-danger ms-3"
      onClick={() => removeFromCart(item.id)}
    >
      Remove
    </button>
  </div>
</div>
);
};


export default CartItem