import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import smartphoneImage from "../../assets/images/smartphone1.avif";
import laptopImage from "../../assets/images/laptop3.webp";
import headphonesImage from "../../assets/images/headphones.webp";

const FeaturedProducts = () => {
  const products = [
    { id: 1, name: 'Smartphone', image: smartphoneImage, price: '$299' },
    { id: 2, name: 'Laptop', image: laptopImage, price: '$799' },
    { id: 3, name: 'Headphones', image: headphonesImage, price: '$49' },
  ];

  return (
    <div className="featured-products py-5 bg-light">
      <div className="container">
        <h2 className="mb-4">Featured Products</h2>
        <Carousel>
          {products.map((product) => (
            <Carousel.Item key={product.id}>
              <img
                className="d-block w-100"
                src={product.image}
                alt={product.name}
              />
              <Carousel.Caption>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default FeaturedProducts;
