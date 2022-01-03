import React from 'react'

const CocktailCart = ({cocktailsList}) => {

  console.log(cocktailsList);
  return (
    <div>
      <p>{cocktailsList.strDrink}</p>
    </div>
  )
}

export default CocktailCart
