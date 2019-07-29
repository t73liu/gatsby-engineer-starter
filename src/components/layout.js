import React, { useCallback, useState } from "react";
import { Link } from "gatsby";

export default ({ children, initialIsActive = false }) => {
  const [isActive, setIsActive] = useState(initialIsActive);
  const memoizedHandleClick = useCallback(
    e => {
      e.preventDefault();
      setIsActive(!isActive);
    },
    [isActive] // Tells React to memoize regardless of arguments.
  );
  const activeClass = isActive ? "is-active" : "";
  return (
    // Might lose class names https://github.com/gatsbyjs/gatsby/issues/8560
    <div>
      <nav
        className="navbar is-light is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a
            role="button"
            className={`navbar-burger ${activeClass}`}
            onClick={memoizedHandleClick}
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className={`navbar-menu ${activeClass}`}>
          <div className="navbar-start">
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
};
