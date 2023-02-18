import React from "react";
import "./header.css";
import CTA from "./CTA";
// import me from "../../assets/real.png";
import me from "../../assets/man-in-black.png";

import HeaderSocial from "./headerSocial";

const header = () => {
  return (
    <div className="header">
      <div className="container header__container head-sction">
        <div className="myName-section">
          <h5>Hey I am,</h5>
          <h1 className="myName">
            Kashif <br />
            Husain<span className="dot">.</span>
          </h1>
          <h5 className="text-light">ReactJS Developer |</h5>
          <h5 className="text-light">Frontend Developer</h5>

          <CTA />
          <HeaderSocial />
        </div>

        
        {/* 
        <div className="myImage-section">
          <div className="me">
            <img src={me} alt="Kashif Profile Photo" />
          </div>
        </div> */}

        {/* <div className="black-circle"></div> */}

        {/* <a href="#contact" className="scroll__down">
          Scroll Down
        </a> */}
      </div>
    </div>
  );
};

export default header;
