import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Login() {
const Navigate=useNavigate();
  const[data,setdata]=
  useState({
  
    email:"",
    password:""
  });
  const HandleSubmit=(event)=>{
    event.preventDefault();
    const Storage=JSON.parse(localStorage.getItem("user"));
    if(Storage.email === data.email && Storage.password === data.password){
      Navigate("/home")
    }
    else{
      alert("Wrong Email or Password")
    }

  }

  return (

    <div 
      className="d-flex justify-content-center align-items-center" 
      style={{ minHeight: '100vh', padding: '40px' }}
    >
      <div 
        className="card shadow-lg border-0" 
        style={{ width: '50vw', maxWidth: '400px', padding: '30px', borderRadius: '15px' }}
      >
        <h3 className="text-center mb-4 text-[2rem]" style={{ color: '#007bff', fontWeight: 'bold' }}>Sign In</h3>
        <form onSubmit={HandleSubmit}>
          {/* Username */}
          <div className="mb-4">
            <label htmlFor="username" className="form-label text-secondary">Username or Email</label>
            <input
              type="text"
              name='email'
              value={data.email}
              onChange={(e)=> setdata({...data,[e.target.name]:e.target.value})}
              className="form-control"
              id="username"
              placeholder="Enter your username or email"
              style={{ borderRadius: '8px', padding: '12px' }}
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="form-label text-secondary">Password</label>
            <input
              type="password"
              name='password'
              value={data.password}
              onChange={(e)=> setdata({...data,[e.target.name]:e.target.value})}
              className="form-control"
              id="password"
              placeholder="Enter your password"
              style={{ borderRadius: '8px', padding: '12px' }}
              required
            />
          </div>

        

          {/* Login Button */}
          <button 
            type="submit" 
            className="btn btn-primary w-100" 
            style={{ borderRadius: '8px', padding: '12px', fontWeight: 'bold' }}
          >
            Login
          </button>
          <p className='mt-4 text-center w-100 '>Don't have an Account?</p>
          <Link to="/"  className='w-100 text-center font-semibold'>
       <p>Register Here</p>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login; 
