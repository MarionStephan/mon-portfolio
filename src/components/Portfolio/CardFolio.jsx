import React from "react";

function CardFolio(props) {
    return (
    <article className="formations__article">
      <div className="formations__article__desc">
        <h2 className="formations__article__title">{props.title}</h2>
        <h3 className="formations__article__school">
          <mark>{props.intitule}</mark>
        </h3>
        <ul className="formations__article__liste">{props.description.map((item,index)=>(
            <li key={index}>{item}</li>
        ))}</ul>
      </div>
    </article>
  );
}

export default CardFolio;
