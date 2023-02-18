import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const headerSocial = () => {
  return (
    <div className="header__social">
      <a href="https://www.linkedin.com/in/iamkashhif/" className="social-icon" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/iamkashhif" className="social-icon" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/iamkashhif/" className="social-icon" target="_blank">
        <BsInstagram />
      </a>
    </div>
  );
};

export default headerSocial;
