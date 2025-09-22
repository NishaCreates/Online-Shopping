import React from 'react'

const ProductCard = ({product,onViewDetails}) => {
  return (
    <div className='card h-100'>
        <img src={product.image} className='card-img-top' alt={product.name}
        style={{height:'200px',objectFit:'cover'}}
        />


    <div className='card-body'>
      <h5 className='card-title'>{product.name}</h5>
      <p className='card-text'>Price: ${product.price}</p>
      <p className="card-text">{product.description}</p>
      <button className='btn btn-primary btn-sm' onClick={()=>onViewDetails(product.id)}>
        ViewDetails
      </button>
    </div>
    </div>
  )
}

export default ProductCard