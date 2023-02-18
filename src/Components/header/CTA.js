import React from "react";
import CV from "../../assets/ResumeReactJs.pdf";
import "./header.css";

const CTA = () => {
  return (
    <div className="cta">
      <a
        href={CV}
        target="_blank"
        className="btn"
      >
        Download&nbsp;CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Contact&nbsp;Me
      </a>
    </div>
  );
};

export default CTA;
