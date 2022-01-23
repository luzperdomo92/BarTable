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

      <section>
        <Outlet />
      </section>

      <Footer />
    </Fragment>
  );
};

export default Layout;
