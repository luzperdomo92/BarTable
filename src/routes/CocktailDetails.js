import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { showCocktailDetails } from "../api/cocktaildb.js";
import { getIngredientsAndMeasure } from "../utilities/arrayreduce.js";

const CocktailDetails = () => {
  let params = useParams();
  const [cocktailDetails, setCocktailDetails] = useState(null);
  const [ingredientsAndMeasure, setIngredientsAndMeasure] = useState(null);

  const prepareSetdetailsData = async () => {
    const detailsCocktail = await showCocktailDetails(params.id);
    setCocktailDetails(detailsCocktail[0]);
  };

  const prepareSetingredientsAndMeasure = () => {
    if (!cocktailDetails) {
      return;
    }
    const ingredientsAndMeasureDetails =
      getIngredientsAndMeasure(cocktailDetails);
    setIngredientsAndMeasure(ingredientsAndMeasureDetails);
  };

  useEffect(() => {
    prepareSetdetailsData();
    if (cocktailDetails) {
      prepareSetingredientsAndMeasure();
    }
  }, [cocktailDetails]);

  return (
    <div className="details d-flex flex-column flex-sm-row row-cols-sm-2 py-4 mt-5 mt-sm-0 pt-md-0">
      {cocktailDetails ? (
        <Fragment>
          <div className="col col-sm-5 px-2 mb-4 mb-sm-0">
            <div className="cocktail-detail text-center">
              <h2 className="font-highlight limb-4">{cocktailDetails.strDrink}</h2>
              <img
                className="cocktail-img"
                src={cocktailDetails.strDrinkThumb}
                alt={cocktailDetails.strDrink}
              />
            </div>
          </div>
          <div className="cocktail-especification col col-sm-7 text-star p-3 pt-md-0 pbg-md-0 mt-md-5">
            <div className="row row-cols-2 ">
              <div className="col col-md-5">
                <h3 className="font-highlight">Ingredients</h3>
                  {ingredientsAndMeasure &&
                    ingredientsAndMeasure.map((ingredients) => (
                      <p key={ingredients.name}>{ingredients.name}</p>
                  ))}
              </div>
              <div className="col">
                <h3 className="font-highlight">Measure</h3>
                {ingredientsAndMeasure &&
                  ingredientsAndMeasure.map((ingredients) => (
                    <p key={ingredients.name}>{ingredients.measure}</p>
                  ))}
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <h3 className="font-highlight">Glass</h3>
                <p>{`Serve: ${cocktailDetails.strGlass}`}</p>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <h3 className="font-highlight">Instructions</h3>
                <p>{cocktailDetails.strInstructions}</p>
              </div>
            </div>
          </div>
        </Fragment>
      ) : null}
    </div>
  );
};

export default CocktailDetails;
