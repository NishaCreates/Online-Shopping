import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Register = () => {
     const[user,setUser]=useState({name:" ",email:" ",password:" "});
    //  const[message,setMessage]=useState(" ");

     const handleRegister=async(e)=>{
         e.preventDefault();
        // console.log("UserDetails:",user);
        try{
          const response= await axios.post("http://localhost:8080/api/users/register",user);
          alert(response.data.message || "User Registered Successfully!");
          setUser({name:" ",email:" ",password:" "})
        }
        catch(error){
          //  console.log("Error response from backend:", error.response);
           const errorMessage=error.response?.data || "Registration Failed!";
           alert(errorMessage);
         
        }
     }

  return (
    <div className='container mt-5'>
        <div className='row justify-content-center'>
            <div className='col-md-6'>
                <h3 className='text-center mb-4'>
                    Register
                </h3>
                {/* {message && <div className='alert alert-info'>{message}</div>} */}
                <form onSubmit={handleRegister}>
                    <div className='mb-3'>
                    <label htmlFor='name' className='form-label'>
                     Name
                    </label>
                    <input
                    type='text'
                    className='form-control'
                    id='name'
                    value={user.name}
                    placeholder='Enter Your Name'
                    onChange={(e)=>setUser({...user,name:e.target.value})}
                    required
                    />
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='email' className='form-label'>
                         Email
                        </label>
                        <input
                        type='email'
                        className='form-control'
                        id='email'
                        value={user.email}
                        placeholder='Enter Your Email'
                        onChange={(e)=>setUser({...user,email:e.target.value})}
                        required
                        />
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='password' className='form-label'>
                            Password
                        </label>
                        <input
                        type='password'
                        className='form-control'
                        id='password'
                        value={user.password}
                        placeholder='Enter Your Password'
                        onChange={(e)=>setUser({...user,password:e.target.value})}
                        required
                        />
                    </div>

                    <button type="submit" className="btn btn-success w-100">
                       Register
                    </button>
                </form>
                     <p className="mt-3 text-center">
                     Already have an account? <Link to="/"><span>Login here</span></Link>
                     </p>

            </div>

        </div>

    </div>
  )
}

export default Register
