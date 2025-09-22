import React, { useState } from 'react';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';

const ProductList = ({ products, onViewDetails,onAddToCart }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter products based on the search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())||
  product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="product-list container py-5">
      <h2 className="mb-4 text-center">Our Products</h2>

    
      {/* Search Bar */}
      <SearchBar onSearch={(query) => setSearchQuery(query)} />

      {/* Product Grid */}
      <div className="row g-4 mt-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="col-md-3" key={product.id}>
              <ProductCard 
              product={product} 
              onViewDetails={onViewDetails}
              onAddToCart={onAddToCart} />
            </div>
          ))
        ) : (
          <p className="text-center mt-4">No products found matching your search.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;