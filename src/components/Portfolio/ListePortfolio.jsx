import React, { useState, useEffect } from 'react';
import CardFolio from "../../components/Portfolio/CardFolio"
import Slideshow from "../../layout/Slideshow/index"

function ListePortfolio() {
    const [portfolio, setPortfolio] = useState([]);
    useEffect(() => {
        fetch('https://marion-stephan.fr/portfolio.json')
            .then((response) => response.json())
            .then((data) => setPortfolio(data))
            .catch((error) => console.error('Erreur lors du chargement des données : ', error));
    }, []);
    return (
        <>
            <h1 className="portfolio__titre">Mes projets</h1>
            <section className='portfolio__section'>
                <h2 className='portfolio__section__titre'>Projets OpenClassrooms</h2>

                {portfolio.map((projet) => (
                    <article className="portfolio__article">
                        <CardFolio
                            key={projet.title}
                            title={projet.title}
                            intitule={projet.intitule}
                            description={projet.description}
                            link={projet.link}
                        />

                        <Slideshow slides={projet.pictures} title={projet.title}/>
                    </article>
                    
                ))}
            </section>
        </>
    )
}
export default ListePortfolio