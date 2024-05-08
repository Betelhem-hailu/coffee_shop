import React from "react";

import { SubHeading } from "../../components";
import "./newsSettler.css";

const Book = () => (
    <div className="app__bg flex__center section__padding">
            <div className="app__news-content">
                <div className='app__newsletter'>
                    <div className='app__newsletter-heading'>
                        <SubHeading title="Newsletter" />
                        <h1 className='headtext__cormorant'>Subscribe to our news letter</h1>
                        <p className='p__opensans'>And never miss latest Updates!</p>
                    </div>
                    <div className='app__newsletter-input flex__center'>
                        <input type='eamil' placeholder='ENter your email address' />
                        <button type="button" className="custom__button">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
);

export default Book;