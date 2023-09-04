import React, { useState, useEffect } from 'react';
import CardExp from "../../components/Experiences/CardExp"

function ListeExperiences() {
    const [experiences, setExperiences] = useState([]);
    useEffect(() => {
        fetch('https://marion-stephan.fr/experiences.json')
            .then((response) => response.json())
            .then((data) => setExperiences(data))
            .catch((error) => console.error('Erreur lors du chargement des données : ', error));
    }, []);
    return(
        <>
            <h1 className="experiences__titre">Mes expériences professionnelles</h1>
            <section className='experiences__section'>
               {experiences.map((experience) =>(

                <CardExp
                key={experience.title}
                title={experience.title}
                school={experience.school}
                city={experience.city}
                description={experience.description}
                year={experience.year}
                />
               ))}
                
            </section>
    </>
    )
}
export default ListeExperiences