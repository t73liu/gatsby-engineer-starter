import React, { Fragment } from "react";
import SEO from "./seo";
import { Link } from "gatsby";
import ExternalLink from "./external-link";

export default ({ data: { tags, projects }, pageContext: { tag } }) => {
  return (
    <Fragment>
      <SEO title={tag ? `Projects | ${tag}` : "Projects"} />
      <section className="hero is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Projects</h1>
          </div>
        </div>
      </section>
      <div className="padded-container">
        <div className="tile is-ancestor">
          <div className="tile is-vertical is-8">
            {projects.nodes.map(node => (
              <div key={node.id} className="tile is-parent">
                <article className="tile is-child">
                  <div className="card">
                    <header className="card-header">
                      <p className="card-header-title is-size-4">
                        <Link to={node.fields.slug}>
                          {node.frontmatter.title}
                        </Link>
                      </p>
                    </header>
                    <div className="card-content">
                      <div className="content">
                        {node.frontmatter.description}
                      </div>
                    </div>
                    <footer className="card-footer">
                      {node.frontmatter.source && (
                        <div className="card-footer-item">
                          <ExternalLink url={node.frontmatter.source}>
                            Code
                          </ExternalLink>
                        </div>
                      )}
                      {node.frontmatter.demo && (
                        <div className="card-footer-item">
                          <ExternalLink url={node.frontmatter.demo}>
                            Demo
                          </ExternalLink>
                        </div>
                      )}
                    </footer>
                  </div>
                </article>
              </div>
            ))}
          </div>
          <div className="tile is-vertical is-parent">
            <article className="tile is-child">
              <p className="title">Tags</p>
              <div className="tags are-medium">
                {tags.group.map(({ fieldValue, totalCount }) => (
                  <span
                    key={fieldValue}
                    className={
                      fieldValue === tag ? "tag has-text-weight-bold" : "tag"
                    }
                  >
                    <Link
                      to={
                        fieldValue === tag
                          ? "/projects/"
                          : `/projects/tags/${fieldValue}/`
                      }
                    >
                      {fieldValue} ({totalCount})
                    </Link>
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
