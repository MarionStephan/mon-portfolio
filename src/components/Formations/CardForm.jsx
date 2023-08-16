import React from "react";

function CardForm(props) {
    const { begin, end } = props.year;
    return (
    <article className="formations__article">
      <div className="formations__article__desc">
        <h2 className="formations__article__title">{props.title}</h2>
        <h3 className="formations__article__school">
          <mark>{props.school}</mark>
          <span className="formations__article__city"> - {props.city}</span>
        </h3>
        <ul className="formations__article__liste">{props.description.map((item,index)=>(
            <li key={index}>{item}</li>
        ))}</ul>
      </div>
      <div className="formations__article__year">
      {begin} {end && `- ${end}`}
      </div>
    </article>
  );
}

export default CardForm;
