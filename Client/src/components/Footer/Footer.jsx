import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="w-footer">
      <div className="footer">
        <div className="logofooter">
          <div className="column">
            <div className="travel">Travel</div>
            <img src="./arrow.svg" alt="arrow" className="arrowIng" />
          </div>
          <span>
            Travel helps companies <br /> manage payments easily.
          </span>
          <div className="companylogos">
            <img src="ln.svg" alt="ln" />
            <img src="ms.svg" alt="ms" />
            <img src="tw.svg" alt="tw" />
            <img src="me.svg" alt="me" />
          </div>
        </div>
        <div className="Companyfooter">
          <div className="footerText">
            <span className="headingFooter">Company</span>
            <span className="normalText">About Us</span>
            <span className="normalText">Careers</span>
            <span className="normalText">Blog</span>
            <span className="normalText">Pricing</span>
          </div>
        </div>
        <div className="destfooter">
          <div className="footerText">
            <span className="headingFooter">Destinations</span>
            <span className="normalText">Maldives</span>
            <span className="normalText">Los Angelas</span>
            <span className="normalText">Las Vegas</span>
            <span className="normalText">Torronto</span>
          </div>
        </div>
        <div className="newslatterfooter">
          <span className="headingFooter">Join Our Newsletter</span>
          <div className="newslatterbox">
            <input type="email" placeholder="Your email address"></input>
            <button className="button">Subscribe</button>
          </div>
          <span>
            * Will send you weekly updates for your better
            <br /> tour packages.
          </span>
        </div>
      </div>
      <div className="footerline"></div>
      <div className="copyright">
        Copyright @ Vaibhav Bakhal 2023. All Rights Reserved.
      </div>
      <img
        src="footerimg.jpeg"
        alt="footerimg"
        className="footerbackgroundimg"
      />
    </div>
  );
};

export default Footer;
