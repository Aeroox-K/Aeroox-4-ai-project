import React from 'react';
import './header.css';
import ai from '../../assets/ai.png'
import people from '../../assets/people.png'

const Header = () => {
  return (
    <div className="header section__padding" id="home">
    <div className="header-content">
      <h1 className="gradient__text line__height ">Let's Build Something amazing with AEROOX's GPT-4 and OpenAI</h1>
      <p>We will notify you on latest project as soon as they launch so you can be the first to explore our amazing OpenAI project</p>

      <div className="header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="header-content__people">
        <img src={people} alt='people' />
        <p>600 people requested early access in last 24 hours</p>
      </div>
    </div>

    <div className="header-image">
      <img src={ai} alt='ai' />
    </div>
  </div>
  )
}

export default Header;