import React, { Fragment } from "react";
import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Fragment>
      <Header>
        <Form />
      </Header>

      <section className="container-xxl render-section">
        <div className="container pt-5 pt-md-3">
          <Outlet />
        </div>
      </section>

      <Footer />
    </Fragment>
  );
};

export default Layout;
