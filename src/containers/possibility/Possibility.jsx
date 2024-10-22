import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className='possibility section__padding' id='possibility'>
      <div className="possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>Get early access to latest project as soon as they launch so you can be the first to explore our amazing OpenAI projects</p>
      <h4><a href="#cta">Request Early Access to Get Started</a></h4>
      </div>
    </div>
  )
}

export default Possibility