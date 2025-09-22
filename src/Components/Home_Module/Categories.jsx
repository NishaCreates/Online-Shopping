import React from 'react';
import electronicsImage from "../../assets/images/electronics1.jpg";
import clothingImage from "../../assets/images/clothings.avif";
import appliancesImage from "../../assets/images/appliances.webp";
import booksImage from "../../assets/images/books.webp";
import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = [
    { id: 1, name: 'Electronics', image: electronicsImage },
    { id: 2, name: 'Clothing', image: clothingImage },
    { id: 3, name: 'Home Appliances', image: appliancesImage },
    { id: 4, name: 'Books', image: booksImage },
  ];

  return (
    <div className='categories py-5 bg-body-tertiary'>
      <div className='container'>
        <h2 className='mb-5 text-center'>Shop By Categories</h2>
        <div className='row g-4'>
            {categories.map((category)=>(
            <div>
              <div className='card h-100 shadow-sm border-0'>
                <img 
                src={category.image}
                className='card-img-top rounded-top'
                alt={category.name}
                style={{ height: '600px', objectFit: 'cover' }}
                />
                <div className='card-body text-center'>
                 <h5 className='card-title fw-bold'>{category.name}</h5>
                  <Link to="/ProductsModule" className="btn btn-outline-primary btn-lg px-4">
                   Explore
                  </Link>
                </div>
                </div>
              </div>

            )) 
          }
        </div>

      </div>
    </div>
  )
}

export default Categories