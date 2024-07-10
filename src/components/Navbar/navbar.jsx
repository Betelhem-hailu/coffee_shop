import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import images from "../../constants/images";
import './navbar.css';
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <nav className="app_navbar">
            <div className="inner">
                <div className="app_navbar-logo">
                    <img src={images.logo} alt="app logo" />
                </div>
                <ul className="app_navbar-links">
                    <li className="p_opensans">
                        <a href="#home">HOME</a>
                    </li>
                    <li className="p_opensans">
                        <a href="#about">ABOUT</a>
                    </li>
                    <li className="p_opensans">
                        <a href="#menu">MENU</a>
                    </li>
                    <li className="p_opensans">
                        <a href="#product">SHOP</a>
                    </li>
                </ul>
                <ul className="app_navbar-links">
                    <li className="p_opensans">
                        <a href="#home">GALLERY</a>
                    </li>
                    <li className="p_opensans">
                        <a href="#blog">BLOG</a>
                    </li>
                    <li className="p_opensans">
                        <a href="#contact">CONTACT</a>
                    </li>
                    <li className="p_opensans">
                        <a href="#awards">CART</a>
                    </li>
                </ul>
                <div className="app_navbar-smallscreen">
                    <GiHamburgerMenu color="#000" fontSize={27} onClick={() => setToggleMenu(true)} />

                    {toggleMenu && (
                        <div className="app_navbar-smallscreen_overlay flex_center slide_bottom">
                            <RxCross2
                                fontSize={27}
                                className="overlay_close"
                                onClick={() => setToggleMenu(false)}
                            />
                            <ul className="app_navbar-smallscreen_links">
                                <li className="p_opensans">
                                    <a href="#home">HOME</a>
                                </li>
                                <li className="p_opensans">
                                    <a href="#about">ABOUT</a>
                                </li>
                                <li className="p_opensans">
                                    <a href="#menu">MENU</a>
                                </li>
                                <li className="p_opensans">
                                    <a href="#awards">SHOP</a>
                                </li>
                                <li className="p_opensans">
                                    <a href="#home">GALLERY</a>
                                </li>
                                <li className="p_opensans">
                                    <a href="#about">BLOG</a>
                                </li>
                                <li className="p_opensans">
                                    <a href="#menu">CONTACT</a>
                                </li>
                                <li className="p_opensans">
                                    <a href="#awards">CART</a>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </nav >
    );
};

export default Navbar;