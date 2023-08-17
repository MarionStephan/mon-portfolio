import React from "react";

function CardForm(props) {
    const { begin, end } = props.year;
    return (
    <article className="experiences__article">
      <div className="experiences__article__desc">
        <h2 className="experiences__article__title">{props.title}</h2>
        <h3 className="experiences__article__school">
          <mark>{props.school}</mark>
          <span className="experiences__article__city"> - {props.city}</span>
        </h3>
        <ul className="experiences__article__liste">{props.description.map((item,index)=>(
            <li key={index}>{item}</li>
        ))}</ul>
      </div>
      <div className="experiences__article__year">
      {begin} {end && `- ${end}`}
      </div>
    </article>
  );
}

export default CardForm;
