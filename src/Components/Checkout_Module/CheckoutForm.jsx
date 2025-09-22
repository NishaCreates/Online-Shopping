import React, { useState } from 'react'

const CheckoutForm = ({onSubmit}) => {
  const[formData,setFormData]=useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
  })

  const handleChange=(e)=>{
    setFormData({
        ...formData,[e.target.name]:e.target.value,
    })
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    onSubmit(formData);
  }

  return (
   <form onSubmit={handleSubmit} className='checkout-form'>
    <h3>Shipping Details</h3>
    <div className='mb-3'>
        <label>Postal Code</label>
        <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              className="form-control"
              required
        />
    </div>
    <button type='submit' className='btn btn-primary'>
        Proceed to Payment
    </button>
   </form>
  )
}

export default CheckoutForm