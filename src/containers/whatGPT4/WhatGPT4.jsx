import React from 'react';
import './whatGPT4.css';
import { Feature } from '../../components';

const WhatGPT4 = () => {
  return (
    <div className='whatgpt4 section__margin' id='wax3' >
      <div className="whatgpt4-feature">
        <Feature  title = "What is AEROOX-4" text = "We are a platform the explore the power of AI systems to build and develop useable projects for best use." />
      </div>
      <div className="whatgpt4-heading">
        <h1 className="gradient__text">Possibilities are beyond your imagination</h1>
        <p><a href="#blog">Explore the Library</a></p>
      </div>
      <div className="whatgpt4-container">
        <Feature title = "Chatbot" text = "Providing Interation of chatbot tool systems using OpenAI gpt-4 " />
        <Feature title = "Knowledgebase" text= "Providing the best dependable and accurate knowledge base for research purposes." />
        <Feature title= "Education" text= "Providing the best information base for learning and practical thinking and brainstorming." />
      </div>
    </div>
  )
}

export default WhatGPT4