import React from "react";
import "./portfolio.css";
import pImg from "../../assets/pfolio.jpg";
import iImg from "../../assets/inotebook.png";
import nImg from "../../assets/newsapp.png";

const data = [
  {
    id: 1,
    image: pImg,
    title: "Amazon Clone using React",
    github: "https://github.com/HarshPatel31/amazon-clone",
    demo: "https://github.com/HarshPatel31/amazon-clone",
  },
  {
    id: 2,
    image: iImg,
    title: "iNotebook",
    github: "https://github.com/HarshPatel31/iNotebook",
    demo: "https://github.com/HarshPatel31/iNotebook",
  },
  {
    id: 3,
    image: nImg,
    title: "latest NewsApp",
    github: "https://github.com/HarshPatel31/newsApp",
    demo: "https://google.com",
  },
];

const portfolio = () => {
  return (
    <section className="portfolio">
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-img">
                <img src={image} alt="amazon clone project" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
                {/* <a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  
                  >
                    Live Demo
                  </a> */}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default portfolio;
