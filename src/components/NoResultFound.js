import React from "react";

const NoResultFound = ({ currentSearchParams }) => {
  let menssage = '';

  if(currentSearchParams.name && currentSearchParams.ingredient) {
    menssage = `${currentSearchParams.name} and ${currentSearchParams.ingredient}`;
  } else if (currentSearchParams.name) {
    menssage = currentSearchParams.name;
  } else {
    menssage = currentSearchParams.ingredient;
  }
  return (
    <div className="d-flex justify-content-center">
      <div className="error-search col p-md-3">
        <h3>Hmmm...</h3>
        <h3>{`We Couldn't find any results for "${menssage}"`}</h3>
        <p className="error-menssage">Search help</p>
        <ul className="error-options">
          <li>Check your search for typos</li>
          <li>Use more generic search terms</li>
          <li>The cocktail you're searching form may be change the general name or not yet on our site</li>
        </ul>
      </div>
    </div>
  );
};

export default NoResultFound;
