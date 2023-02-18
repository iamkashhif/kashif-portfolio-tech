import React from "react";
import "./footer.css";
import { FaGithub } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const footer = () => {
  return (
    <footer className="footer">
      {/* <a href="#" className="footer__logo">
        Harsh Patel
      </a> */}
      {/* <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__social">
        <a
          href="https://github.com/HarshPatel31"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="footer__social__icon" />
        </a>
        <a
          href="https://www.instagram.com/harshpatel200624/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiInstagram className="footer__social__icon" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <IoLogoTwitter className="footer__social__icon" />
        </a>
      </div> */}
      <div className="footer__copyright">
        {/* <small><small>&copy; Copyright &hearts; Kashif { new Date().getFullYear()}, All Rights Reserved. </small></small> */}
        <small><small> Developed By <span style={{ color: 'red', fontSize: '18px'}}>&#10084;</span> Kashif H. </small></small>

      </div>
    </footer>
  );
};

export default footer;
