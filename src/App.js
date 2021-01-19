import React, { useEffect, useState } from "react";
import Recipe from './Recipe';
import './App.css';

function App() {

  // This is not a secure way to store API keys in a React app
  // it is just for simple exercise purposes
  const appId = process.env.REACT_APP_APP_ID;
  const appKey = process.env.REACT_APP_APP_KEY;

  const exampleApiRequest = `/search?q=chicken&app_id=${appId}&app_key=${appKey}`;

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(exampleApiRequest);
    const data = await response.json();
    // console.log(data);
    setRecipes(data.hits);
  };
  
  return (
    // This is JSX
    <div className="App">
      <h1>Cooking Recipes</h1>
      <form className="search-form" action="">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {recipes.map(recipe =>(
        <Recipe />
      ))};
    </div>
  );
};

export default App;