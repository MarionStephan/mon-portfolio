import React from "react";
import presentation from "../../data/presentation.json"

const Presentation = ()=>{
    return (
        <header className="header">
            <h1 className="header__titre">Bienvenue sur mon Portfolio !</h1>
            <div className="header__pres">
            <img className="header__pres__img" src={presentation.photo} alt="Avatar" />
            <p className="header__pres__intro">{presentation.introduction}</p></div>
        </header>
    )
}
export default Presentation