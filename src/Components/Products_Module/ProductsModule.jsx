import React, { useState } from 'react';
import ProductList from './ProductList';
import { useNavigate } from 'react-router-dom';
//import ProductDetails from './ProductDetails';
//import SearchBar from './SearchBar';
import { useCart } from '../Cart_Module/CartContext';
import { Link } from 'react-router-dom';

import laptopImage from '../../assets/images/laptopimage.jpg';
import laptopImage1 from '../../assets/images/laptopImage1.jpg';
import laptopImage2 from '../../assets/images/laptopImage2.webp';
import headphonesImage from '../../assets/images/headphonesimage.jpg';
import headphonesImage1 from '../../assets/images/headphonesImage1.webp';
import headphonesImage2 from '../../assets/images/headphonesImage2.jpg';
import smartphoneImage3 from '../../assets/images/smartphoneImage3.webp';
import smartphoneImage1 from '../../assets/images/smartphoneimage1.webp';
import smartphoneImage2 from '../../assets/images/smartphonesImage2.jpg';
import watchImage from '../../assets/images/watchimage.jpg';
import watchImage1 from '../../assets/images/watchimage1.jpg';
import watchImage2 from '../../assets/images/watchimage2.jpg';
import sareeImage from '../../assets/images/bluesaree.jpg';
import sareeImage1 from '../../assets/images/greensaree.jpg';
import sareeImage2 from '../../assets/images/redsaree.jpg';
import sareeImage3 from '../../assets/images/yellowsaree.jpg';
import necklaceImage from '../../assets/images/necklaceset.jpg';
import necklaceImage1 from '../../assets/images/necklaceset1.jpg';
import necklaceImage2 from '../../assets/images/necklaceset2.jpg';
import necklaceImage3 from '../../assets/images/necklaceset3.jpg';
import weddingImage from '../../assets/images/weddingdress.avif';
import weddingImage1 from '../../assets/images/weddingdress1.jpg';
import weddingImage2 from '../../assets/images/weddingdress2.jpg';
import weddingImage3 from '../../assets/images/weddingdress3.jpg';
import chudiImage from '../../assets/images/chudi.jpg';
import chudiImage1 from '../../assets/images/chudi1.jpg';
import jeansImage from '../../assets/images/jeans.avif';
import jeansImage1 from '../../assets/images/combosuit.avif';
import glassImage from '../../assets/images/glasses.avif';
import frockImage from '../../assets/images/frock.jpg';
import frockImage1 from '../../assets/images/pinkfrock.jpg';
import frockImage2 from '../../assets/images/flowerfrock.jpg';

const ProductsModule = () => {
  const {addToCart}=useCart();
  const navigate=useNavigate();
  const [products] = useState([
    { id: 1, 
      name: 'Laptop-Dell', 
      price: 50000,
      category:'Laptop', 
      image: laptopImage, 
      description: 'A powerful laptop with high performance and long battery life.'
     },
     { 
      id: 2, 
      name: 'Laptop - Apple', 
      price: 60000, 
      category: 'Laptop', 
      image: laptopImage1, 
      description: 'An ultra-slim laptop with a stunning display and fast performance.' 
    },
    { 
      id: 3, 
      name: 'Laptop - NoteBook', 
      price: 70000, 
      category: 'Laptop', 
      image: laptopImage2, 
      description: 'An ultra-slim laptop with a stunning display and fast performance.' 
    },
    { id: 4, 
      name: 'Sony Headphones', 
      price: 2000,
      category:'Headphones', 
      image: headphonesImage,
      description: 'Comfortable and lightweight headphones with excellent sound quality.' 
    },
    { 
      id: 5, 
      name: 'JBL Headphones', 
      price: 2000, 
      category: 'Headphones', 
      image: headphonesImage1, 
      description: 'Comfortable and lightweight headphones with excellent sound quality.' 
    },
    { 
      id: 6, 
      name: 'Samsung Headphones', 
      price: 2000, 
      category: 'HeadPhones', 
      image: headphonesImage2, 
      description: 'Comfortable and lightweight headphones with excellent sound quality.' 
    },
    { id: 7, 
      name: 'Smartphone-Apple', 
      price: 30000,
      category:'Smartphone', 
      image: smartphoneImage3,
      description: 'A sleek smartphone with a stunning display and powerful camera.' 
    },
    { id: 8, 
      name: 'Smartphone-Vivo', 
      price: 30000,
      category:'Smartphone', 
      image: smartphoneImage1,
      description: 'A sleek smartphone with a stunning display and powerful camera.' 
    },
    { id: 9, 
      name: 'Smartphone-Samsung', 
      price: 30000,
      category:'Smartphone', 
      image: smartphoneImage2,
      description: 'A sleek smartphone with a stunning display and powerful camera.' 
    },
    { id: 10, 
      name: 'SmartWatch', 
      price: 10000,
      category:'Watches', 
      image: watchImage,
      description: 'A stylish smartwatch with fitness tracking and customizable faces.' 
    },
    { id: 11, 
      name: 'Watch', 
      price: 10000,
      category:'Watches', 
      image: watchImage1,
      description: 'A stylish smartwatch with fitness tracking and customizable faces.' 
    },
    { id: 12, 
      name: 'Watch', 
      price: 10000,
      category:'Watches', 
      image: watchImage2,
      description: 'A stylish smartwatch with fitness tracking and customizable faces.' 
    },
    { id: 13, 
      name: 'Saree', 
      price: 1000,
      category:'Saree', 
      image: sareeImage,
      description: 'A unique and beautifull sarees with mirror work.' 
    },
    { id: 14, 
      name: 'Saree', 
      price: 2000,
      category:'Saree', 
      image: sareeImage1,
      description: 'A unique and beautifull sarees with mirror work.' 
    },
    { id: 15, 
      name: 'Saree', 
      price: 3000,
      category:'Saree', 
      image: sareeImage2,
      description: 'A unique and beautifull sarees with mirror work.' 
    },
    { id: 16, 
      name: 'Saree', 
      price: 2500,
      category:'Saree', 
      image: sareeImage3,
      description: 'A unique and beautifull sarees with mirror work.' 
    },
    { id: 17, 
      name: 'Necklace', 
      price: 900,
      category:'necklace', 
      image: necklaceImage,
      description: 'A unique and beautifull design.' 
    },
    { id: 18, 
      name: 'Necklace', 
      price: 1500,
      category:'necklace', 
      image: necklaceImage1,
      description: 'A unique and beautifull design.' 
    },
    { id: 19, 
      name: 'Necklace', 
      price: 2000,
      category:'necklace', 
      image: necklaceImage2,
      description: 'A unique and beautifull design.' 
    },
    { id: 20, 
      name: 'Necklace', 
      price: 1800,
      category:'necklace', 
      image: necklaceImage3,
      description: 'A unique and beautifull design.' 
    },
    { id: 21, 
      name: 'Wedding Dress', 
      price: 25000,
      category:'weddingdress', 
      image: weddingImage,
      description: 'A pure white gown with dazzling work.' 
    },
    { id: 22, 
      name: 'Wedding Dress', 
      price: 30000,
      category:'weddingdress', 
      image: weddingImage1,
      description: 'A pure white gown with dazzling work.' 
    },
    { id: 23, 
      name: 'Wedding Dress', 
      price: 50000,
      category:'weddingdress', 
      image: weddingImage2,
      description: 'A pure white gown with dazzling work.' 
    },
    { id: 24, 
      name: 'Wedding Dress', 
      price: 70000,
      category:'weddingdress', 
      image: weddingImage3,
      description: 'A pure white gown with dazzling work.' 
    },
    { id: 25, 
      name: 'Churidhar', 
      price: 4000,
      category:'Churidhar', 
      image: chudiImage,
      description: 'A unique and sleek design.' 
    },
    { id: 26, 
      name: 'Churidhar', 
      price: 7000,
      category:'Churidhar', 
      image: chudiImage1,
      description: 'A unique and sleek design.' 
    },
    { id: 27, 
      name: 'Jeans', 
      price: 5000,
      category:'jeans', 
      image: jeansImage,
      description: 'A rough and tough jeans.' 
    },
    { id: 28, 
      name: 'Jeans and Jacket', 
      price: 100000,
      category:'jeans', 
      image: jeansImage1,
      description: 'A light weight jeans and jacket with cotton shirt and shoes.' 
    },
    { id: 29, 
      name: 'Glasses', 
      price: 2000,
      category:'glasses', 
      image: glassImage,
      description: 'A polarized UV protection glasses.' 
    },
    { id: 30, 
      name: 'Girls Frock', 
      price: 3000,
      category:'frock', 
      image: frockImage,
      description: 'A soft fabric cotton rock.' 
    },
    { id: 31, 
      name: 'Girls Frock', 
      price: 2800,
      category:'frock', 
      image: frockImage1,
      description: 'A soft fabric cotton rock.' 
    },
    { id: 32, 
      name: 'Girls Frock', 
      price: 3200,
      category:'frock', 
      image: frockImage2,
      description: 'A soft fabric cotton rock.' 
    },


    
    

  ]);

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleViewDetails = (productId) => {
    const product = products.find((p) => p.id === productId);
    setSelectedProduct(product);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} added to cart!`);
    navigate("/CartPage");
  }

  const handleSearch = (searchTerm) => {
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(results);
  };

    //const navigate = useNavigate();
    const handleLogout=(navigate)=>{
      localStorage.removeItem("userName");
      navigate("/login");
    }

  return (
    <div>
       <nav class="navbar navbar-expand bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className='container-fluid'>
        <Link className="navbar-brand text-primary fw-bold" to="/">
            Online Store
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto" style={{ display: "flex", gap: "15px" }}>
            <li className="nav-item">
                <Link className="nav-link" to="/Home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ProductsModule">
                  Products
                </Link>
              </li>
              <li className='nav-item'>
                <button className='btn btn-outline-danger' onClick={() => handleLogout(navigate)}>Logout</button>
              </li>
            </ul>
          </div>

        </div>
      </nav>

      {/* <SearchBar onSearch={handleSearch} /> */}
      {!selectedProduct ? (
        <ProductList
          products={filteredProducts}
          onViewDetails={handleViewDetails}
          onAddToCart={handleAddToCart}
        />
      ) : (
       
        <div className='container mt-5'>
          <div className='row justify-content-center'>
            <div className='col-md-6'>
              <div className='card shadow-lg'>
                <img 
                src={selectedProduct.image} 
                alt={selectedProduct.name}
                className='card-img-top img-fluid'
                style={{objectFit:'cover',height:'300px'}}
                />
                <div className='card-body text-center'>
                  <h3 className='card-title fw-bold'>{selectedProduct.name}</h3>
                  <p className='card-text text-muted'>{selectedProduct.description}</p>
                  <h4 className='text-primary mb-4'>Price: ₹{selectedProduct.price}</h4>
                  <div className='d-flex justify-content-center gap-3'>
                  <button className='btn btn-danger px-4' onClick={() => handleAddToCart(selectedProduct)}>Add To Cart</button>
                  <button className='btn btn-success px-4' onClick={()=>setSelectedProduct(null)}>Back to Products</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        )}
      </div>
  );
};

export default ProductsModule;
