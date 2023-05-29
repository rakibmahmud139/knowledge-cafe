import React from 'react';
import './Name.css'

const Name = (props) => {


    return (
        <div className='name-container'>
            <h2>{props.bg.name}</h2>
        </div>
    );
};

export default Name;