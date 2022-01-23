import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShowCocktailDetails } from "../api/cocktaildb.js";

const CocktailDetails = () => {
  let params = useParams();
  const [cocktailDetails, setCocktailDetails] = useState(null);

  console.log(cocktailDetails);
  const prepareSetailsData = async () => {
    const DetailsCocktail = await ShowCocktailDetails(params.id);
    setCocktailDetails(DetailsCocktail);
  };

  useEffect(() => {
    prepareSetailsData();
  }, []);

  return (
    <div>
      <h1>desde details</h1>
      <h2></h2>
    </div>
  );
};

export default CocktailDetails;
