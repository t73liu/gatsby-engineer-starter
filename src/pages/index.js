import React, { Fragment } from "react";
import SEO from "../components/seo";

export default () => (
  <Fragment>
    <SEO title="Home" />
    <section className="hero is-primary is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Welcome</h1>
        </div>
      </div>
    </section>
  </Fragment>
);
