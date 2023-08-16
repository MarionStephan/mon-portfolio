import React from 'react';

function Stack({ category, technologies }) {
    return (
        <div className='competences__cat'>
            <h3 className='competences__cat__titre'>{category}</h3>
            <div className='competences__cat__img'>
                {technologies.map(({ name, logo }) => (
                    <img key={name} src={logo} alt={`${name} Logo`} title={`${name} Logo`} />
                ))}
            </div>
        </div>
    );
}

export default Stack;
