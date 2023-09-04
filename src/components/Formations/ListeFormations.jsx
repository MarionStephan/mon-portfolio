import React, { useState, useEffect } from 'react';
import CardForm from "../../components/Formations/CardForm";

function ListeFormations() {
    const [formations, setFormations] = useState([]);
    useEffect(() => {
        fetch('https://marion-stephan.fr/formations.json')
            .then((response) => response.json())
            .then((data) => setFormations(data))
            .catch((error) => console.error('Erreur lors du chargement des données : ', error));
    }, []);
    return(
        <>
            <h1 className="formations__titre">Mes formations</h1>
            <section className='formations__section'>
               {formations.map((formation) =>(

                <CardForm
                key={formation.title}
                title={formation.title}
                school={formation.school}
                city={formation.city}
                description={formation.description}
                year={formation.year}
                />
               ))}
                
            </section>
    </>
    )
}
export default ListeFormations