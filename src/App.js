import React, {Fragment, useState, useEffect} from 'react'
import Header from 'components/Header';
import GridArea from 'components/GridArea';
import {getcocktails} from 'api/cocktaildb.js';
import 'styles.css'

function App() {

  const [cocktailSearch, setCocktailSearch] = useState(null)
  const [cocktailsList, setCocktailsList] = useState([])


  useEffect(() => {
    const getCocktailsList = async () => {
      if(cocktailSearch === null)
        return;

      const ListCocktails = await getcocktails(cocktailSearch);
      console.log('ListCocktails--> ',ListCocktails);
      setCocktailsList(ListCocktails);
    }
    getCocktailsList();
  }, [cocktailSearch])

  return (
    <Fragment>
      <div className="container">
        <Header
          setCocktailSearch={setCocktailSearch}
        />
        <GridArea
          cocktailsList={cocktailsList}
        />
      </div>
    </Fragment>
  );
}

export default App;
