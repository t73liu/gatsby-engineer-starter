import React from "react";
import { Link } from "gatsby";
import ExternalLink from "./external-link";

export default ({
  fields: { slug },
  frontmatter: { title, description, source, demo },
}) => (
  <div className="card">
    <div className="card-image">
      <figure className="image is-4by3">
        <img
          src="https://bulma.io/images/placeholders/1280x960.png"
          alt="Placeholder image"
        />
      </figure>
    </div>
    <header className="card-header no-box-shadow">
      <div className="card-header-content">
        <p className="title is-size-3">
          <Link to={slug}>{title}</Link>
        </p>
      </div>
    </header>
    <div className="card-content">
      <div className="content">{description}</div>
    </div>
    <footer className="card-footer">
      {source && (
        <div className="card-footer-item no-border">
          <ExternalLink url={source}>Code</ExternalLink>
        </div>
      )}
      {demo && (
        <div className="card-footer-item no-border">
          <ExternalLink url={demo}>Demo</ExternalLink>
        </div>
      )}
    </footer>
  </div>
);
