import React, { useState, useEffect } from 'react';
import CardFolio from "../../components/Portfolio/CardFolio"

function ListePortfolio() {
    const [portfolio, setPortfolio] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/portfolio.json')
            .then((response) => response.json())
            .then((data) => setPortfolio(data))
            .catch((error) => console.error('Erreur lors du chargement des données : ', error));
    }, []);
    return(
        <>
            <h1 className="experiences__titre">Mes projets</h1>
            <section className='experiences__section'>
                <h2>Projets OpenClassrooms</h2>
               {portfolio.map((projet) =>(

                <CardFolio
                key={projet.title}
                title={projet.title}
                intitule={projet.intitule}
                description={projet.description}
                />
               ))}
                
            </section>
    </>
    )
}
export default ListePortfolio