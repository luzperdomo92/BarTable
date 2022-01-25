import axios from "axios";

export const getCocktails = async (cocktailSearch) => {
  const { name, ingredient } = cocktailSearch;

  const coctailByName = await searchCocktailByName(name);
  const coctailByIngredient = await seachCocktailByIngredient(ingredient);

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

const searchCocktailByName = async (cocktailName) => {
  if (cocktailName !== "" && cocktailName !== null) {
    const params = {
      s: cocktailName,
      c: "Cocktail",
    };
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_URL_COCKTAIL_API}search.php`,
        {
          params: params,
        }
      );
      return response.data.drinks;
    } catch (error) {
      console.log(error);
    }
  }
};

const seachCocktailByIngredient = async (cocktailIngredient) => {
  if (cocktailIngredient !== "" && cocktailIngredient !== null) {
    const params = {
      i: cocktailIngredient,
    };
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_URL_COCKTAIL_API}filter.php`,
        {
          params: params,
        }
      );

      return response.data.drinks;
    } catch (error) {
      console.log(error);
    }
  }
};

export const showCocktailDetails = async (id) => {
  const params = {
    i: id,
  };

  try {
    const response = await axios.get(
      `${process.env.REACT_APP_URL_COCKTAIL_API}lookup.php`,
      {
        params: params,
      }
    );

    return response.data.drinks;
  } catch (error) {
    console.log(error);
  }
};
