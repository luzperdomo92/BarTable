import React, { useState, useEffect } from "react";


const Form = ({ setCocktailSearch }) => {
  const initialState = {
    name: "",
    ingredient: "",
  };

  const [searchCocktail, setSearchCocktail] = useState(initialState);

  const updateSearchValues = (e) => {
    setSearchCocktail({
      ...searchCocktail,
      [e.target.name]: e.target.value,
    });
  };

  const getDataToSearch = (e) => {
    e.preventDefault();

    // validate inputs
    if (
      searchCocktail.name.trim() === "" &&
      searchCocktail.ingredient.trim() === ""
    ) {
      // Hacer componente de error
      return;
    }
    // restart the state
    setCocktailSearch(searchCocktail);
  };

  return (
    <form className="d-flex" onSubmit={getDataToSearch}>
      <input
        className="form-control me-2"
        type="text"
        placeholder="Search by Name"
        aria-label="Search by Name"
        name="name"
        onChange={updateSearchValues}
      />

      <input
        className="form-control me-2"
        type="text"
        placeholder="Search by Ingredient"
        name="ingredient"
        onChange={updateSearchValues}
      />

      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
};

export default Form;
