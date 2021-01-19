import React from 'react';

// We create a Recipe component
// The goal is to map through it
// and display it inside the App component

// In the parenthesis, we are passing things from the props to the Recipe component
const Recipe = ({title, calories, image}) => {
    return(
        // This is JSX
        <div>
            <h1>{title}</h1>
            <p>{calories}</p>
            <img src={image} alt=""/>
        </div>
    );
};

export default Recipe;