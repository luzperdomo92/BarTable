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
      <div className="container">
        <div className="d-flex align-items-center justify-content-between flex-column flex-md-row">
          <div className="col col-md-3">
            <Link to="/">
              <h1 className="logo me-auto me-lg-0">BarTable</h1>
            </Link>
          </div>
          <div className="col col-md-8">{children}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
