import React from 'react';
// Custom made CSS for this particular Recipe component
import style from './recipe.module.css';

// We create a Recipe component
// The goal is to map through it
// and display it inside the App component

// In the parenthesis, we are passing things from the props to the Recipe component
const Recipe = ({title, calories, image, ingredients}) => {
    return(
        // This is JSX
        <div className={style.recipe}>
            <h2 className={style.title}>{title}</h1>
            <img src={image} alt="recipe-image" className={style.image}/>
            <p>{Math.round(calories)} calories</p>
            <ul className={style.ingredients}>
                {ingredients.map(ingredient =>(
                    <li className={style.ingredient}>{ingredient.text}</li>
                ))};
            </ul>
        </div>
    );
};

export default Recipe;