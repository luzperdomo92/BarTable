export const getIngredientsAndMeasure = (cocktailDetails) => {
  let ingredients = [];
  let cocktail = cocktailDetails;

  for (let i = 1; i <= 15; i++) {
    let ingredient = cocktail[`strIngredient${i}`];
    if (ingredient) {
      ingredients.push({
        name: ingredient,
        measure: cocktail[`strMeasure${i}`]
      })
    }
  }
  return ingredients;
}
