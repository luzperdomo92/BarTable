import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HeroForm = () => {
  const initialState = {
    name: "",
    ingredient: "",
  };

  let navigate = useNavigate();

  const [cocktailSearchParams, setCocktailSearchParams] =
    useState(initialState);

  const updateSearchValues = (e) => {
    setCocktailSearchParams({
      ...cocktailSearchParams,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    navigate("/search");
  };

  return (
    <form className="d-flex" onSubmit={submitForm}>
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

export default HeroForm;
