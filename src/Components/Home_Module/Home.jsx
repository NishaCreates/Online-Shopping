import React from 'react';
import HeroSection from './HeroSection';
import Categories from './Categories';
import FeaturedProducts from './FeaturedProducts';
import Testimonials from './Testimonials';
//import { Link } from 'react-router-dom';


const Home = () => {


  return (
    <div>
      
        <HeroSection/>
        
      
        <Categories/>
        <FeaturedProducts/>
        <Testimonials/>

        <div>
        <section id="about" className="about-section bg-light py-5">
  <div className="container text-center">
    <h2 className="mb-4 text-primary">About Us</h2>
    <p className="lead">
      Welcome to our online store! We offer high-quality products at the best prices.
      Our mission is to provide a seamless shopping experience for our valued customers.
    </p>
    <p>
      From the latest tech gadgets to trendy fashion, we've got it all. Shop with confidence
      knowing you're getting top-notch service and products.
    </p>
  </div>
</section>

<section id="contact" className="contact-section bg-white py-5">
  <div className="container">
    <h2 className="mb-4 text-primary text-center">Contact Us</h2>
    <div className="row">
      <div className="col-md-6">
        <h5>Get in Touch</h5>
        <p>Phone: +1 234 567 890</p>
        <p>Email: support@yourstore.com</p>
        <p>Address: 123 Main Street, MBZ, Abudhabi</p>
      </div>
      <div className="col-md-6">
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Your Name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Your Email" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </div>
  </div>
</section>
    </div>
    </div>
  )
}

export default Home