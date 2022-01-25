import axios from "axios";

const URL_COCKTAIL_API = "https://www.thecocktaildb.com/api/json/v1/1/";

export const getcocktails = async (cocktailSearch) => {
  const { name, ingredient } = cocktailSearch;

  const coctailByName = await SeachCocktailByName(name);
  const coctailByIngredient = await SeachCocktailByIngredient(ingredient);

  if (coctailByName === undefined && coctailByIngredient === undefined) {
    return [];
  }

  if (coctailByName === undefined) {
    return coctailByIngredient;
  }

  if (coctailByIngredient === undefined) {
    return coctailByName;
  }

  const coctailBothSearch = coctailByName.filter((coctailName) => {
    return coctailByIngredient.find((coctailIng) => {
      return coctailIng.idDrink === coctailName.idDrink;
    });
  });
  return coctailBothSearch;
};

const SeachCocktailByName = async (cocktailName) => {
  if (cocktailName !== "" && cocktailName !== null) {
    const params = {
      s: cocktailName,
      c: "Cocktail",
    };
    try {
      const response = await axios.get(`${URL_COCKTAIL_API}search.php`, {
        params: params,
      });
      return response.data.drinks;
    } catch (error) {
      console.log(error);
    }
  }
};

const SeachCocktailByIngredient = async (cocktailIngredient) => {
  if (cocktailIngredient !== "" && cocktailIngredient !== null) {
    const params = {
      i: cocktailIngredient,
      // c: "Cocktail",
    };
    try {
      const response = await axios.get(`${URL_COCKTAIL_API}filter.php`, {
        params: params,
      });

      return response.data.drinks;
    } catch (error) {
      console.log(error);
    }
  }
};

export const ShowCocktailDetails = async (id) => {
  const params = {
    i: id,
  };

  try {
    const response = await axios.get(`${URL_COCKTAIL_API}lookup.php`, {
      params: params,
    });

    return response.data.drinks;
  } catch (error) {
    console.log(error);
  }
};
