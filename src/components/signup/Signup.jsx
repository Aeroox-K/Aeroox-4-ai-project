import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import './signup.css'
import logo from '../../assets/logo-main.png';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from 'react';



const Signup = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible (!passwordVisible);
  };

  return (
<div className='sign-container' >

  <div className='sign-main'>
    <div className='logo-container'>
    <div className='logo'> <Link to="/"><img src={logo} alt="logo" /></Link></div>
    </div>
    
    <div className="signin">
    <div className="form-wrapper">
      <div className="text-center">
        <h1>Create an account</h1>
        <p className="description">
        Enter your information to create a new account.
        </p>
      </div>
      <form className="form">
        <div className="form-group">
          <label for="fullname">Full Name</label>
          <input className='forminput' id='fullname' placeholder='Fullname' type="text" required />
        </div>
        
        <div className="form-group">
          <label for="email">Email address</label>
          <input className='forminput' id="email" placeholder="name@example.com" type="email" required />
        </div>
        <div className="form-group">
          <div>
            <label for="password">Password</label>
          </div>

          <div className='forminput'>
          <input id="password" placeholder="********" type= {passwordVisible ? 'text' : 'password'  } pattern=".{8}" title="Must contain at least 8 or more characters" required/>
          <button className="eyebtn" onClick={togglePasswordVisibility}>
              {passwordVisible 
              ? <FaEye />
              : <FaEyeSlash />
              }
          </button>
          </div>
          
        </div>
        
        <button className='btn' type="submit">
          <Link to="/">Sign up</Link>
        </button>
      </form>

      <div className='acct'><p>Already have an account? <Link className="linked" to= "signin" >Signin</Link></p></div>
    </div>
  </div>
  </div>

</div>

  
  )
}

export default Signup;