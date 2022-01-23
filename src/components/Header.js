import React from "react";
import { Link } from "react-router-dom";

const Header = ({
  setCocktailSearchParams,
  cocktailSearchParams,
  getCocktailsList,
  children,
}) => {
  return (
    <header id="header" className="fixed-top d-flex align-items-cente">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
        <Link to="/">
          <h1 className="logo me-auto me-lg-0">BarTable</h1>
        </Link>
        <div className="row">
          <div className="col">{children}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
