import React from 'react';

import { images } from '../../constants'

import './aboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus flex__center section__padding' id='about'>
    <div className='app__aboutus-content flex__center'>
    <div className='app__aboutus-content_about'>
    <h1 className='headtext__cormorant'>Our Story</h1>
    <p className='p__opensans'>Welcome to our coffee shop! 
We believe coffee is much more than just a drink - it's an experience to be savoured. 
Our beans are ethically sourced from small farms around the world, bringing you unique flavours from each region. 
Whether it's the bright, fruity notes of an Ethiopian Yirgacheffe or the rich, chocolatey smoothness of a Sumatran Mandheling, 
every cup tells a story. For us, making coffee is a ceremonial process. We carefully roast each batch to bring out the most complex flavours and aromas. 
Our baristas hand-craft each drink with precision and care, turning preparation into meditation. <br />

<span className='p__cormorant'>Sip slowly and let the flavours blossom on your palate.</span></p>
    <button type="button" className="custom__button">Know More</button>
    </div>

      <div className="app__aboutus-content_bartender">
      <img src={images.bartender} alt="about bartender" className='bartender__img'/>
      </div>
    </div>
  </div>
);

export default AboutUs;