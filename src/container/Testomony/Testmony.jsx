import React from 'react';
import { useRef } from "react";

import { data } from '../../constants'

import './testmony.css';
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

const TestmonyCard = ({ test: { imgUrl, name, review } }) => (
  <div className='app__test-card'>
    <img src={imgUrl} alt="profile" />
    <div className='app_test-card_content'>
      <p className='p__cormorant title'>{name}</p>
      <div className='content'>
        <p className='p__opensans'>{review}</p>
      </div>
    </div>
  </div>
)

const Testmony = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 550;
    } else {
      current.scrollLeft += 550;
    }
  };

  return (
    <div className='app__test' id='about'>
      <div className='overlay_test'>
        <div className='flex__center section__padding '>
          <div className='app__test-content'>
            <div className='app__test-content_test'>
              <h1 className='headtext__cormorant' style={{ color: 'white' }}>What Our Customers Say </h1>
            </div>


            <div className="app__test-content_customers">
              <div className='app__test_container' ref={scrollRef}>
                {data.testmony.map((test) => <TestmonyCard test={test} key={test.title} />)}
              </div>
              <div className="app__test-content_arrows">
                <IoMdArrowDropleft
                  className="test__arrow-icon"
                  onClick={() => scroll("left")}
                />
                <IoMdArrowDropright
                  className="test__arrow-icon"
                  onClick={() => scroll("right")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testmony;