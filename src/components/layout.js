import React from "react";
import { Link } from "gatsby";

export default ({ children }) => {
  return (
    <div>
      <nav
        className="navbar is-light is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container navbar-brand">
          <Link className="navbar-item" to="/">
            <strong>Home</strong>
          </Link>
          <Link className="navbar-item is-bold" to="/blog/">
            <strong>Blog</strong>
          </Link>
          <Link className="navbar-item is-bold" to="/projects/">
            <strong>Projects</strong>
          </Link>
        </div>
      </nav>
      <div className="hero is-fullheight-with-navbar">
        <main>{children}</main>
        <footer className="footer is-fixed-bottom">
          <div className="content has-text-centered">
            <p>
              Gatsby starter by{" "}
              <a href="https://t73liu.github.io">
                <strong>Tao Liu</strong>
              </a>
              . The{" "}
              <a href="https://github.com/t73liu/gatsby-engineer-starter">
                <strong>source code</strong>
              </a>{" "}
              is licensed MIT.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};
