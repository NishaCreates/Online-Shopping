import { useState } from "react";
import React from 'react';
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate=useNavigate();
    const[email,setEmail]=useState(" ");
    const[password,setPassword]=useState(" ");
    const[agree,setAgree]=useState(false);
    const[emailError,setEmailError]=useState(" ");
    const[passwordError,setPasswordError]=useState(" ");
    const[checkboxError,setCheckboxError]=useState(" ");
    const [error, setError] = useState("");

    const validateEmail=(email)=>{
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }

    const handleLogin = async (e) => {
      e.preventDefault();
      let isValid = true; 

       // Reset errors
     setEmailError("");
     setPasswordError("");
     setCheckboxError("");
     setError("");

         //Email validation
         if(!email){
          setEmailError("Email is required");
          isValid=false;
         }
         else if(!validateEmail(email)){
          setEmailError("Please Enter a valid email");
          isValid=false;
         }
    
          //Password Validation
          if(!password){
            setPasswordError("Password is required.");
            isValid=false;
          }
          else if(password.length<6){
            setPasswordError("Password must be atleast 6 characters long.");
            isValid=false;
          }
    
           // Checkbox validation
           if (!agree) {
          setCheckboxError("You must agree to the terms and privacy policy.");
          isValid = false;
         }
    
         if (isValid) {
          //console.log("Email:", email, "Password:", password);
        }
  
      try {
          const response = await fetch("http://localhost:8080/api/users/login", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify({ email, password }),
          });
  
          if (response.ok) {
            const data = await response.json();
            alert(data.message);
            localStorage.setItem("userName", data.name);
              navigate("/Home");
          } else {
              const errorMessage = await response.text();
              setError(errorMessage);
          }
      } catch (err) {
          console.error(err);
          setError("An error occurred. Please try again.");
      }
     
  };
  
  return (
    <div className="container mt-5">
        <div className="row justify-content-center">
            <div className="col-md-6">
            <h3 className='text-center'>Login</h3>
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                <label htmlFor='email' className='form-label'>
                E-Mail Address
                </label>
                <input 
                type='email' 
                className={`form-control ${emailError ? "is-invalid":" "}`}
                id='email' 
                placeholder='Enter your email' 
                value={email} 
                onChange={(e)=>setEmail(e.target.value)} 
                required/>
                {emailError && <div className="invalid-feedback">{emailError}</div>}
                 </div>

                 <div className="mb-3">
                 <label htmlFor="password" className="form-label">
                  Password  
                 </label> 
                 <input
                 type="password" 
                 className={`form-control ${passwordError ? "is-invalid" : ""}`}
                 id="password"
                 placeholder="Enter your Password"
                 value={password}
                 onChange={(e)=>setPassword(e.target.value)}
                 required/> 
                  {passwordError && <div className="invalid-feedback">{passwordError}</div>} 
                 </div>

                 <div className="form-check mb-3">
                  <input
                  type="checkbox"
                  className="form-check-input"
                  id="termsCheckbox"
                  checked={agree}
                  onChange={(e)=>setAgree(e.target.checked)}
                  />
                  <label htmlFor="termsCheckbox" className="form-check-label">
                    By continuing,I agree to the <a href="#!">terms of use</a> & <a href="#!"> privacy policy</a>
                  </label>
                 </div>
                 {checkboxError && <div className="error">{checkboxError}</div>}
                 <button type="submit" className="btn btn-primary w-100">
                  Login  
                 </button>
              </form>
              {error && <div className="alert alert-danger mt-3">{error}</div>}
                  <p className="mt-3 text-center">
                      Don't have an account? <Link to="/register"><span>Register here</span></Link>
                  </p>

            </div>
       </div>
    </div>
  );
}


export default Login

