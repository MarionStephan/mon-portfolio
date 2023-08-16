import React from "react";
import imgSticker from '../../assets/photo-sticker.png';

const Presentation = ()=>{
    return (
        <header className="header">
            <h1 className="header__titre">Bienvenue sur mon Portfolio !</h1>
            <div className="header__pres">
            <img className="header__pres__img" src={imgSticker} alt="Avatar" />
            <p className="header__pres__intro">Après l'obtention d'un master d'Histoire et riche d'une formation en développement web effectuée en alternance grâce à OpenClassrooms, je suis à la recherche d'un CDI dans une entreprise qui me permettra de mettre à profit mes connaissances. Vous pouvez découvrir ici les projets réalisés dans le cadre de ma formation et mes projets personnels. Bonne visite !</p></div>
        </header>
    )
}
export default Presentation