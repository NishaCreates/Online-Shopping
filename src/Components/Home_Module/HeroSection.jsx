import React,{useEffect,useState} from 'react'

import { Link} from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const HeroSection=()=>{

    const [userName, setUserName] = useState("");
    useEffect(() => {
      const storedName = localStorage.getItem("userName");
      if (storedName) {
          setUserName(storedName);
      }
  }, []);

  const navigate = useNavigate();
  const handleLogout=(navigate)=>{
    localStorage.removeItem("userName");
    alert("Thank you!.Visit Again!")
    navigate("/login");
    
  }
  return(
  
    <div className='hero-section bg-body-tertiary'>
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
              <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
              </li>
              <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
               </a>
              </li>
              <li className='nav-item'>
                <button className='btn btn-outline-danger' onClick={() => handleLogout(navigate)}>Logout</button>
              </li>
            </ul>
          </div>

        </div>
      </nav>
      <div className="container mt-5">
            <h1 className="text-center">Welcome{userName ? `, ${userName}` : ""}!</h1>
            <p className="text-center">Enjoy exploring our website.</p>
        </div>
      

 
      
      <div className="container mt-4">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1483181957632-8bda974cbc91?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="First slide"
              style={{ height: '400px', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>Summer Sale</h3>
              <p>Enjoy up to 50% off on selected items!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              //src="https://via.placeholder.com/1200x400?text=New+Arrivals"
              src="https://plus.unsplash.com/premium_photo-1700056213055-c0a98d4577f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Second slide"
              style={{ height: '400px', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>New Arrivals</h3>
              <p>Check out the latest products in our store!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1647221598398-934ed5cb0e4f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Third slide"
              style={{ height: '400px', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>Free Shipping</h3>
              <p>On all orders above ₹1000.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>

        <div className="text-center py-4">
        <h1 className="display-5 fw-bold mb-3 text-primary">Welcome to our Online Store</h1>
        <p className="mb-4">Get the best deals on top-quality products!</p>
        <Link to="/ProductsModule" className="btn btn-outline-primary btn-lg px-4">
            Shop Now
          </Link>
        </div>

    </div>
  )
}

export default HeroSection;