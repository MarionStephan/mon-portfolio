import React from "react";

function CardFolio(props) {
  return (
    <div className="portfolio__article__desc">
      <h2 className="portfolio__article__title">{props.title}</h2>
      <h3 className="portfolio__article__school">
        <mark>{props.intitule}</mark>
      </h3>
      <ul className="portfolio__article__liste">{props.description.map((item, index) => (
        <li key={index}>{item}</li>
      ))}</ul>
      <div className="portfolio__article__btn">
        <a href={props.link[0]} target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i></a>
        {props.link[1] && props.link[1].trim() !== "" && (
          <a href={props.link[1]} target="_blank" rel="noreferrer">Visiter le site</a>
        )}
        </div>
    </div>
  );
}

export default CardFolio;
