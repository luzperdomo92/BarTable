import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { ShowCocktailDetails } from "../api/cocktaildb.js";
import { getIngredientsAndMeasure } from "../utilities/arrayreduce.js";

const CocktailDetails = () => {
  let params = useParams();
  const [cocktailDetails, setCocktailDetails] = useState(null);
  const [ingredientsAndMeasure, setIngredientsAndMeasure] = useState(null);

  const prepareSetdetailsData = async () => {
    const DetailsCocktail = await ShowCocktailDetails(params.id);
    setCocktailDetails(DetailsCocktail);
  };

  const prepareSetingredientsAndMeasure = () => {
    const ingredientsAndMeasureDetails = getIngredientsAndMeasure(
      cocktailDetails[0]
    );
    setIngredientsAndMeasure(ingredientsAndMeasureDetails);
  };

  useEffect(() => {
    prepareSetdetailsData();
    if (cocktailDetails) {
      prepareSetingredientsAndMeasure();
    }
  }, []);

  console.log(cocktailDetails);

  return (
    <div className="details row row-cols-2 py-4">
      {cocktailDetails ? (
        <Fragment>
          <div className="col-5">
            <div className="cocktail-detail text-center">
              <h2 className="mb-4">{cocktailDetails[0].strDrink}</h2>
              <img
                className="cocktail-img"
                src={cocktailDetails[0].strDrinkThumb}
                alt={cocktailDetails.strDrink}
              />
            </div>
          </div>
          <div className="col-7 text-center">
            <div className="cocktail-ingredients">
              <h3>Ingredients</h3>
              {ingredientsAndMeasure &&
                ingredientsAndMeasure.map((ingredients) => (
                  <p key={ingredients.name}>{ingredients.name}</p>
                ))}
            </div>
            <div className="cocktail-glass mt-4">
              <h3>Glass</h3>
              <p>{`Serve: ${cocktailDetails[0].strGlass}`}</p>
            </div>

            <div className="row row-cols-2 mt-4">
              <div className="col">
                <h3>Measure</h3>
                {ingredientsAndMeasure &&
                  ingredientsAndMeasure.map((ingredients) => (
                    <p key={ingredients.name}>{ingredients.measure}</p>
                  ))}
              </div>
              <div className="col">
                <h3>Instructions</h3>
                <p>{cocktailDetails[0].strInstructions}</p>
              </div>
            </div>
          </div>
        </Fragment>
      ) : null}
    </div>
  );
};

export default CocktailDetails;
