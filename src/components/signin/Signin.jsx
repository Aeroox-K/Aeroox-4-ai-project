import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import './signin.css'
import logo from '../../assets/logo-main.png';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from 'react';



const Signin = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible (!passwordVisible);
  };

  return (
   <div>
    <div className='logo'> <Link to="/"><img src={logo} alt="logo" /></Link></div>
    <div className="signin">
    <div className="form-wrapper">
      <div className="text-center">
        <h1>Sign in to your account</h1>
        <p className="description">
          Enter your email and password below to access your account.
        </p>
      </div>
      <form className="form">
        <div className="form-group">
          <label for="email">Email address</label>
          <input className='forminput' id="email" placeholder="name@example.com" type="email" required />
        </div>
        <div className="form-group">
          <div>
            <label for="password">Password</label>
          </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
          <div className='forminput'>

          <input id="password" placeholder="********" type={passwordVisible ? 'text' : 'password'} required pattern= ".{8}" title="Must contain at least 8 or more characters"
          />
          <button className='eyebtn' onClick={togglePasswordVisibility}>  
          {passwordVisible 
          ?  <FaEye  />
          :  <FaEyeSlash />
          } 
          </button>

          </div>
           
        </div>
        <button className='btn' type="submit">
        <Link to="/">Sign in</Link>
        </button>
      </form>

      <div className='acct'><p>Do you have an account? <Link className="linked" to= "signup" >SignUp</Link></p></div>
    </div>
  </div>
  </div>
  
  )
}

export default Signin
