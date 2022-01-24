import React, { useState } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";

const Form = () => {
  const initialState = {
    name: "",
    ingredient: "",
  };

  const navigate = useNavigate();
  const [inputSearchCocktail, setInputSearchCocktail] = useState(initialState);

  const inputFieldsPresent = () => {
    return (
      inputSearchCocktail !== null &&
      (inputSearchCocktail.name.trim() !== "" ||
        inputSearchCocktail.ingredient.trim() !== "")
    );
  };

  const updateSearchValues = (e) => {
    setInputSearchCocktail({
      ...inputSearchCocktail,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (inputFieldsPresent()) {
      navigate({
        pathname: "/search",
        search: `?${createSearchParams(inputSearchCocktail)}`,
      });
    } else {
      alert("todos los campos son obligatorios");
    }
  };

  return (
    <form
      className="row mt-3 mt-md-0 g-2 gy-md-0 text-center"
      onSubmit={submitForm}
    >
      <div className="col-sm-6 col-md-4 col-lg-4">
        <input
          className="input-form form-control form-control-dark me-2"
          type="text"
          placeholder="Search by Name"
          aria-label="Search by Name"
          name="name"
          value={inputSearchCocktail.name}
          onChange={updateSearchValues}
        />
      </div>
      <div className="col-sm-6 col-md-4 col-lg-5">
        <input
          className="input-form form-control form-control-dark me-2"
          type="text"
          placeholder="Search by Ingredient"
          name="ingredient"
          value={inputSearchCocktail.ingredient}
          onChange={updateSearchValues}
        />
      </div>
      <div className="col text-lg-end">
        <button className="btn-form animated fadeInUp scrollto" type="submit">
          Search
        </button>
      </div>
    </form>
  );
};

export default Form;
