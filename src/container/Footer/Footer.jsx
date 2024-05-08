import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { images } from "../../constants";
import "./footer.css";

const Footer = () => (
  <div className="app__footer section__padding">

    <div className="app__footer-links">
    <div className="app__footer-links_work">
      <h1 className="app__footer-headtext">Working Hours</h1>
      <p className="p__opensans__footer">Sunday............9:00 - 22:00</p>
      <p className="p__opensans__footer">Monday............9:00 - 22:00</p>
      <p className="p__opensans__footer">Tuesday............9:00 - 22:00</p>
      <p className="p__opensans__footer">Wednesday............900 - 22:00</p>
      <p className="p__opensans__footer">Thursday............9:00 - 22:00</p>
      <p className="p__opensans__footer">Friday............9:00 - 01:00</p>
      <p className="p__opensans__footer">Saturday............9:00 - 01:00</p>
      </div>
     
      <div className="app__footer-links_contact">
      <h1 className="app__footer-headtext">our social media</h1>
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans__footer">Wavel St, Addis Ababa, Ethiopia</p>
        <p className="p__opensans__footer">+251 945 555 55</p>
        <p className="p__opensans__footer">+251 965 555 55</p>
      </div>
      <div className="app__footer-links_logo">
     <img src={images.logo} alt="footer_logo" />
        <p className="app__footer-headtext">
          &quot;SIP THE COMPASSION&quot;
        </p>
        </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans__footer">2024 KAWA. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;