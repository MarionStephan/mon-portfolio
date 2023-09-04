import React, { useState, useEffect } from 'react';
import Stack from './Stack';

function ListeStack() {
    const [stack, setStack] = useState([]);

    useEffect(() => {
        fetch('https://marion-stephan.fr/stack.json')
            .then((response) => response.json())
            .then((data) => setStack(data.categories))
            .catch((error) => console.error('Erreur lors du chargement des données : ', error));
    }, []);

    return (
        <section className='competences'>
            <h2 className='competences__titre'>Compétences techniques</h2>
            <div className="competences__section">
                {stack.map(({ name, technologies }) => (
                    <Stack key={name} category={name} technologies={technologies} />

                ))}
            </div>
        </section>
    );
}

export default ListeStack;
