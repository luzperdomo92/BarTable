import React, { useState, useEffect } from "react";
import CocktailCard from "../components/CocktailCard";
import { getCocktails } from "../api/cocktaildb.js";
import { useSearchParams } from "react-router-dom";

const SearchResults = () => {
  const [cocktailsList, setCocktailsList] = useState([]);
  const [cocktailSearchParams] = useSearchParams();

  useEffect(() => {
    const currentSearchParams = Object.fromEntries([...cocktailSearchParams]);
    const getSearchResults = async () => {
      const listCocktails = await getCocktails(currentSearchParams);
      setCocktailsList(listCocktails);
    };
    getSearchResults();
  }, [cocktailSearchParams]);

  return (
    <div className="row justify-content-center pt-5 mt-5 mt-sm-0 pt-md-0">
      {cocktailsList &&
        cocktailsList.map((cocktail) => (
          <CocktailCard key={cocktail.idDrink} cocktailsList={cocktail} />
        ))}
    </div>
  );
};

export default SearchResults;
