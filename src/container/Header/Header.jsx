import React from 'react';

// import { SubHeading } from '../../components';
// import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__bg app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      {/* <SubHeading title="Chase the new flavour" /> */}
      <h1 className="app__header-h1">Drink deep. Discover the compassion in every cup.</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Every cup is not just a beverage; it's a journey to the heart of Ethiopia.</p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      {/* <img src={images.bg} alt="header_img" /> */}
      <canvas class="webgl"></canvas>
    </div>
  </div>
);

export default Header;