import React from "react";
import Form from "./Form";

const Header = ({setCocktailSearch}) => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="#">
          BarTable
        </a>
        <Form
          setCocktailSearch={setCocktailSearch}
        />
      </nav>
    </header>
  );
};

export default Header;
