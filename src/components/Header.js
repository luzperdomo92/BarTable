import React from "react";
import { Link } from "react-router-dom";

const Header = ({
  setCocktailSearchParams,
  cocktailSearchParams,
  getCocktailsList,
  children,
}) => {
  return (
    <header id="header" className="fixed-top d-flex align-items-center ">
      <div className="container container-xl">
        <div className="d-flex align-items-center justify-content-between flex-column flex-md-row">
          <div className="col col-md-4">
            <Link to="/">
              <h1 className="logo me-auto me-lg-0 mr-3">BarTable</h1>
            </Link>
          </div>
          <div className="col col-md-8">
            {children}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
