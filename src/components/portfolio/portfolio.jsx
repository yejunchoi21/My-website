import React from "react";
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.png';
import IMG2 from '../../assets/ImageSearcher.png';
import IMG3 from '../../assets/ToDoList.jpg';
import IMG4 from '../../assets/portfolio4.jpg';

const Portfolio = () => {
  return (
<section id="portfolio">

    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>
    <div className="container portfolio__container">
        <article className="portfolio__item">
            <div className="portfolio__item-image">
                <img src={IMG1} alt="portfolio__item-image" />
            </div>
                <h3>Weather App</h3>
                <a href="https://github.com/yejunchoi21/Weather-App" className="btn" target="_blank">Github</a>
                <a href="https://github.com" className="btn btn-primary" target="_blank">Live Demo</a>
        </article>
        <article className="portfolio__item">
            <div className="portfolio__item-image">
                <img src={IMG2} alt="portfolio__item-image" />
            </div>
                <h3>Image Searcher</h3>
                <a href="https://github.com/yejunchoi21/Search-App" className="btn" target="_blank">Github</a>
                <a href="https://github.com" className="btn btn-primary" target="_blank">Live Demo</a>
        </article>
        <article className="portfolio__item">
            <div className="portfolio__item-image">
                <img src={IMG3} alt="portfolio__item-image" />
            </div>
                <h3>ToDo List</h3>
                <a href="https://github.com/yejunchoi21/ToDo-List" className="btn" target="_blank">Github</a>
                <a href="https://github.com" className="btn btn-primary" target="_blank">Live Demo</a>
        </article>
        <article className="portfolio__item">
            <div className="portfolio__item-image">
                <img src={IMG4} alt="portfolio__item-image" />
            </div>
                <h3>This is a portfolio item title</h3>
                <a href="https://github.com" className="btn" target="_blank">Github</a>
                <a href="https://github.com" className="btn btn-primary" target="_blank">Live Demo</a>
        </article>
    </div>
</section>
  )
};

export default Portfolio;