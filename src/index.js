import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import PageLayout from "./components/PageLayout";
import SearchResults from "./routes/SearchResults";
import CocktailDetails from "./routes/CocktailDetails";
import {styles} from "./styles/styles.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route element={<PageLayout />}>
          <Route path="/search" element={<SearchResults />} />
          <Route path="/cocktail/:id" element={<CocktailDetails />} />
        </Route>

        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
