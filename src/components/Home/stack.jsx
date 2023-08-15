import React from 'react';
import skillsData from '../../data/stack.json';

const Portfolio = () => {
    return (
        <section className='competences'>
            <h2 className='competences__titre'>Compétences techniques</h2>
            <div className="competences__section">
                {Object.keys(skillsData).map(category => (
                    <div className='competences__cat' key={category}>
                        <h3 className='competences__cat__titre'>{category}</h3>
                        <div className='competences__cat__img'>
                            {skillsData[category].map(skill => (
                                <img src={skill.logo} alt={`${skill.name} Logo`} title={`${skill.name} Logo`}/>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
