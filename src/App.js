import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import Login from './Components/Authentication_Module/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Register from './Components/Authentication_Module/Register';
import Home from './Components/Home_Module/Home';
import ProductsModule from './Components/Products_Module/ProductsModule';
import CartPage from './Components/Cart_Module/CartPage';
import { CartProvider } from './Components/Cart_Module/CartContext';
import CheckoutModule from './Components/Checkout_Module/CheckoutModule';
import OrdersDetails from './Components/Orders_Module/OrdersDetails';



function App() {
  return (
   <>
    <CartProvider>
   <Router>
    <Routes>
       {/* Commenting login page for Netlify preview */}
  {/* <Route path="/" element={<Login/>}/> */
  {/* <Route path="/Register" element={<Register/>}/> */}
      {/* Show Shop directly */}
       <Route path="/Home" element={<Home/>}/>
      
       <Route path="/ProductsModule" element={<ProductsModule/>}/>
       <Route path="/CartPage" element={<CartPage/>}/>
       <Route path="/CheckoutModule" element={<CheckoutModule/>}/>
       <Route path="/order-details" element={<OrdersDetails/>}/>
      
       <Route path="*" element={<Navigate to="/" />} />
      
    </Routes>
   </Router>
   </CartProvider>
  
   </>
   
  );
}

export default App;
