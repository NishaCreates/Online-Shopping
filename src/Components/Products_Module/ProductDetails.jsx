import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductDetails = ({product,onAddToCart}) => {
  const navigate=useNavigate();

  const handleAddToCart = (product) => {
   onAddToCart(product);
   alert(`${product.name} added to cart!`);
    navigate("/CartPage"); 
}
    
  return (
    <div className='product-details container py-5'>
    <div className='row'>
      <div className='col-md-6'>
        <img
          src={product.image}
          alt={product.name}
          className='img-fluid'
          style={{maxHeight:'400px'}}
        />
      </div>
      <div className='col-md-6'>
        <h2>{product.name}</h2>
        <p className="mt-3">{product.description}</p>
        <p>Price:${product.price}</p>
        <button className='btn btn-primary' onClick={()=>handleAddToCart(product)}> 
          Add To Cart
        </button>
      </div>
    </div>
    </div>
  )
}

export default ProductDetails