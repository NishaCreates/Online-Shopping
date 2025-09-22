import React,{useState} from 'react'
import { useCart } from '../Cart_Module/CartContext';
import { useNavigate } from 'react-router-dom';

const PaymentOptions = ({ onPayment }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const { cartItems, setCartItems } = useCart();
  const navigate = useNavigate();

  const handlePaymentSuccess = () => {
    if (!selectedOption) {
      alert("Please select a payment method!");
      return;
    }

    const order = {
      id: `ORD-${Date.now()}`,
      items: cartItems,
      total: cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
      status: "Processing",
      shipping: {
        name: "Aariv",
        address: "123 Main Street, City, Country",
        phone: "1234567890",
      },
    };

    alert(`Payment Successful using ${selectedOption}`);
    setCartItems([]);
    navigate("/order-details", { state: { order } });
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="payment-options container py-5">
      <h2 className="mb-4 text-center">Choose Payment Method</h2>
      <div className="d-flex flex-column align-items-center gap-3">
        <div>
          <input
            type="radio"
            id="card"
            name="paymentMethod"
            value="Card"
            onChange={handleOptionChange}
          />
          <label htmlFor="card" className="ms-2">Pay with Card</label>
        </div>
        <div>
          <input
            type="radio"
            id="paypal"
            name="paymentMethod"
            value="PayPal"
            onChange={handleOptionChange}
          />
          <label htmlFor="paypal" className="ms-2">Pay with PayPal</label>
        </div>
        <button className="btn btn-success mt-3" onClick={handlePaymentSuccess}>
          Complete Payment
        </button>
      </div>
    </div>
  );
};

export default PaymentOptions;