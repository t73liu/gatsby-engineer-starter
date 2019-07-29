import React from "react";
import { Link } from "gatsby";

const Layout = ({ children }) => (
  // Might lose class names https://github.com/gatsbyjs/gatsby/issues/8560
  <div>
    <nav
      className="container navbar is-light is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          Home
        </Link>
        <Link className="navbar-item" to="/blog/">
          Blog
        </Link>
        <Link className="navbar-item" to="/projects/">
          Projects
        </Link>
      </div>
    </nav>
    <div className="hero is-fullheight-with-navbar">
      <main>{children}</main>
      <footer className="footer is-fixed-bottom">
        <div className="content has-text-centered">
          <p>
            <strong>Gatsby</strong> starter by{" "}
            <a href="https://t73liu.github.io">Tao Liu</a>. The{" "}
            <a href="https://github.com/t73liu/gatsby-engineer-starter">
              source code
            </a>{" "}
            is licensed MIT.
          </p>
        </div>
      </footer>
    </div>
  </div>
);

export default Layout;
