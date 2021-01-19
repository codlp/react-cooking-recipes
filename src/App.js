import React from "react";
import './App.css';

function App() {

  const exampleApiRequest = `https://api.edamam.com/search?q=chicken&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`;

  return (
    <div className="App">
      <h1>Cooking Recipes</h1>
      <form className="search-form" action="">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default App;