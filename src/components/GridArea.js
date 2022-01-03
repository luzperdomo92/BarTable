import React from 'react'
import CocktailCart from "./CocktailCart";

const GridArea = ({cocktailsList}) => {
  return (
    <div>
    {cocktailsList && cocktailsList.map(cocktail => (
      <CocktailCart
        key={cocktail.idDrink}
        cocktailsList={cocktail}
      />
    ))}
    </div>
  )
}

export default GridArea
