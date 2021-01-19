import React from 'react';

// We create a Recipe component
// The goal is to map through it
// and display it inside the App component

// In the parenthesis, we are passing things from the props to the Recipe component
const Recipe = ({title, calories, image, ingredients}) => {
    return(
        // This is JSX
        <div>
            <h1>{title}</h1>
            <p>{Math.round(calories)} calories</p>
            <ul>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))};
            </ul>
            <img src={image} alt=""/>
        </div>
    );
};

export default Recipe;