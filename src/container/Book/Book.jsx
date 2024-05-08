import React from "react";

import { SubHeading } from "../../components";
import "./book.css";

const Book = () => (
    <div className="app__bg flex__center section__padding">
        <div className="app__wrapper_info ">
            <SubHeading title="Beyond the exceptional coffee" />
            <h1 className="headtext__cormorant">Enjoy Our Coffee Indoor</h1>

            <div className="app__book-content">
                <form className="form flex__center">
                    <div className="grid">
                    <label>
                        <input required="" placeholder="YOUR NAME" type="text" className="input" />
                    </label>
                    <label>
                        <input required="" placeholder="EMAIL ADDRESS" type="email" className="input" />
                    </label>
                    <label>
                        <input required="" placeholder="DD/MM/YYYY" type="date" className="input" />
                    </label>
                    <label>
                        <input required="" placeholder="PHONE NUMBER" type="number" className="input" />
                    </label>
                    <label>
                        <input required="" placeholder="6" type="number" className="input" />
                    </label>
                    <label>
                        <input required="" placeholder="2 PERSON" type="text" className="input" />
                    </label>
                    </div>
                    <div className="grid__item">
                    <label>
                        <textarea required="" placeholder="YOUR MESSAGE" type="text" className="input"></textarea>
                    </label>
                    </div>
                    <div className="btn_submit">
                        <button className="custom__button">BOOK NOW</button>
                    </div>
                </form>
                <form className="form_small_screen  flex__center">
              
                    <label>
                        <input required="" placeholder="YOUR NAME" type="text" className="input" />
                    </label>
                    <label>
                        <input required="" placeholder="EMAIL ADDRESS" type="email" className="input" />
                    </label>
                    <label>
                        <input required="" placeholder="DD/MM/YYYY" type="date" className="input" />
                    </label>
                    <label>
                        <input required="" placeholder="PHONE NUMBER" type="number" className="input" />
                    </label>
                    <label>
                        <input required="" placeholder="6" type="number" className="input" />
                    </label>
                    <label>
                        <input required="" placeholder="2 PERSON" type="text" className="input" />
                    </label>
               
                    <label>
                        <textarea required="" placeholder="YOUR MESSAGE" type="text" className="input"></textarea>
                    </label>
                
                    <div className="btn_submit">
                        <button className="custom__button">BOOK NOW</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
);

export default Book;