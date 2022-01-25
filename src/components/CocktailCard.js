import React from "react";
import { Link } from "react-router-dom";

const CocktailCard = ({ cocktailsList }) => {
  const { idDrink, strDrink, strDrinkThumb } = cocktailsList;
  const backGroundImgUrl = strDrinkThumb;
  return (
    <div className="card-wrap col-12 col-sm-6 col-md-4 col-lg-3 g-4">
      <div className="card">
        <Link to={`/cocktail/${idDrink}`}>
          <div
            className="card-bg"
            style={{ backgroundImage: `url(${backGroundImgUrl})` }}
          ></div>
          <div className="card-info">
            <h1>{cocktailsList.strDrink}</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CocktailCard;
