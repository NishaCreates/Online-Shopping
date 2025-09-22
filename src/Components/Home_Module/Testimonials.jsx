import React from 'react';

const Testimonials = () => {
  const testimonials = [
    { id: 1, name: 'Harini', review: 'Great products and service!' },
    { id: 2, name: 'Ajith', review: 'Highly recommend this store!' },
    { id: 3, name: 'Amjith', review: 'Affordable prices and fast delivery!' },
  ];

  return (
    <div className="testimonials py-5">
      <div className="container">
        <h2 className="mb-4">What Our Customers Say</h2>
        <div className="row">
          {testimonials.map((testimonial) => (
            <div className="col-md-4" key={testimonial.id}>
              <div className="card border-primary mb-3">
                <div className="card-body">
                  <blockquote className="blockquote mb-0">
                    <p>{testimonial.review}</p>
                    <footer className="blockquote-footer">
                      {testimonial.name}
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
