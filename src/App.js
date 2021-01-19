import React, { useEffect, useState } from "react";
import Recipe from './Recipe';
import './App.css';

function App() {

  // This is not a secure way to store API keys in a React app
  // it is just for simple exercise purposes
  const appId = process.env.REACT_APP_APP_ID;
  const appKey = process.env.REACT_APP_APP_KEY;

  const [recipes, setRecipes] = useState([]);
  
  // SEARCH through the recipes
  const [search, setSearch] = useState("");
  // We create a state that only submits itself after we click the search button
  const [query, setQuery] = useState('chicken');
  
  const exampleApiRequest = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`;

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(exampleApiRequest);
    const data = await response.json();
    // console.log(data);
    setRecipes(data.hits);
    console.log(data.hits);
  };
  
  const updateSearch = event => {
    setSearch(event.target.value);
  }

  const getSearch = event => {
    // Stop the page refresh
    event.preventDefault();
    // Set the query to the finished updated value typed by the user in the input field
    setQuery(search);
    // Reset input after search
    setSearch('');
  }

  return (
    // This is JSX
    <div className="app">
      <h1 class="page-title">Cooking Recipes</h1>
      <form 
      onSubmit={getSearch}
      className="search-form" action="">
        <input className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {/* recipes is an array */}
      {/* we are passing things from the states to the props */}
      {/* Each child in a list should have a unique "key" prop */}
      <div className="recipe">
        {recipes.map(recipe =>(
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients} />
        ))};
      </div>
    </div>
  );
};

export default App;