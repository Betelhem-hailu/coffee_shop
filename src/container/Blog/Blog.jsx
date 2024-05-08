import React from 'react';

import { data } from "../../constants";
import './blog.css';
import { IoArrowForward } from 'react-icons/io5';

const BlogCard = ({blog: {imgUrl, title, content}}) => (
  <div className='app__blogs-card'>
  <img src={imgUrl} alt="blog_image"/>
  <div className='app_blogs-card_content'>
  <p className='p__cormorant'>{title}</p>
  <p className='p__opensans'>{content}</p>
  <p type="button" className="p__opensans last">READ MORE <IoArrowForward /></p>
  </div>
  </div>
)

const Blog = () => (
  <div className='flex-center section__padding' id='awards'>
    <h1 className='headtext__cormorant flex__center'>Our Blog</h1>

    <div className='app__blogs'>
    {data.blogs.map((blog)=> <BlogCard blog={blog} key={blog.title}/>)}
    </div>
  </div>
);

export default Blog;