import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate=useNavigate();
  const[data,setdata]=useState({
    name:"",
    email:"",
    password:""
  });
  const[error,seterror]=useState("")
  const HandleSubmit=(event)=>{
    event.preventDefault();
    if(!data.email.endsWith('@gmail.com')){
      seterror("Please Enter a Valid email Address")
      return;
    }

   localStorage.setItem("user",JSON.stringify(data));
   navigate('/login')
  }
  return (
    
    <div 
      className="d-flex justify-content-center align-items-center" 
      style={{ minHeight: '100vh', padding: '20px' }}
    >
      <div 
        className="card shadow-lg border-0" 
        style={{ width: '50vw', maxWidth: '450px', padding: '30px', borderRadius: '15px' }}
      >
        <h3 className="text-center mb-4 text-[2rem]" style={{ color: '#007bff', fontWeight: 'bold' }}>Sign Up</h3>
        <form onSubmit={HandleSubmit} >
          {/* Full Name */}
          <div className="mb-4">
            <label htmlFor="fullName" className="form-label text-secondary">Full Name</label>
            <input
              type="text"
              name='name'
              value={data.name}
              onChange={(e)=> setdata({...data,[e.target.name]:e.target.value})}
              className="form-control"
              id="fullName"
              placeholder="Enter your full name"
              style={{ borderRadius: '8px', padding: '12px' }}
              required
            />
          </div>
          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="form-label text-secondary">Email</label>
            <input
              type="email"
              name='email'
              value={data.email}
              onChange={(e)=> setdata({...data,[e.target.name]:e.target.value})}
              className="form-control"
              id="email"
              placeholder="Enter your email"
              style={{ borderRadius: '8px', padding: '12px' }}
              required
            />
          </div>
          {error && <div style={{ color: 'red' }}>{error}</div>}
          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="form-label text-secondary">Password</label>
            <input
              type="password"
              className="form-control"
              name='password'
              value={data.password}
              onChange={(e)=> setdata({...data,[e.target.name]:e.target.value})}
              id="password"
              placeholder="Create a password"
              style={{ borderRadius: '8px', padding: '12px' }}
              required
            />
          </div>
         
          {/* Sign Up Button */}
       
          <button 
            type="submit" 
            className="btn btn-primary w-100" 
            style={{ borderRadius: '8px', padding: '12px', fontWeight: 'bold' }}
          >
            Sign Up
          </button>
          <p className='mt-4 w-100 text-center '>Already have an Account?</p>
          <Link to="./login" className='w-100 text-center font-semibold'>
          <p>Login</p>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
