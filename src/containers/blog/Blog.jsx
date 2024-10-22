import React from 'react';
import './blog.css';
import { Article } from '../../components'
import { blog01, blog02, blog03, blog04, blog05  } from './imports'

const Blog = () => {
  return (
    <div className='blog section__padding' id='blog'>
      <div className="blog-heading">
        <h1 className="gradient__text">A lot is happening. We are blogging about it.</h1>
      </div>
      <div className="blog-container">
        <div className="blog-container_groupA">
          <a href="https://briefit.vercel.app/">
          <Article imgUrl={blog01} date= "August 2024" title = "Briefit - Simplify your reading with briefit summarizer. Our Briefit Summarizer, Summarizes Articles with OPENAI GPT-4"/> 
          </a>
        </div>
        <div className="blog-container_groupB">
        <a href="javascript:void(0)">
        <Article imgUrl={blog02} date= "May 2024" title = "AEROOX-4 is a GPT-4 integrated platform and Open AI is the future. Let us explore how it is"/>
        </a>
        <a href="javascript:void(0)">
        <Article imgUrl={blog03} date= "May 2024" title = "AEROOX-4 is a GPT-4 integrated platform and Open AI is the future. Let us explore how it is"/>
          </a>
        <a href="javascript:void(0)">
        <Article imgUrl={blog04} date= "May 2024" title = "AEROOX-4 is a GPT-4 integrated platform and Open AI is the future. Let us explore how it is"/>
          </a>
        <a href="javascript:void(0)">
        <Article imgUrl={blog05} date= "May 2024" title = "AEROOX-4 is a GPT-4 integrated platform and Open AI is the future. Let us explore how it is"/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Blog