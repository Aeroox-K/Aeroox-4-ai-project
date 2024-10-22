import React from 'react';
import './cta.css'; 

const Cta = () => {
  return (
    <div className='cta' id='cta' >
        <div className='cta-content'>
          <p>Request Early Access to Get Started</p>
          <h3>Register today & start exploring endless possibilities</h3>
        </div>
        <div className='cta-btn'>
          <button type='button'> <a href="/signin"> Get Started</a></button>
        </div>
    </div>
  )
}

export default Cta