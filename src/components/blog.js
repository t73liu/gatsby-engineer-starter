import React, { Fragment } from "react";
import SEO from "./seo";
import { Link } from "gatsby";

export default ({ data: { tags, posts }, pageContext: { tag } }) => {
  return (
    <Fragment>
      <SEO title={tag ? `Blog | ${tag}` : "Blog"} />
      <section className="hero is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Blog</h1>
          </div>
        </div>
      </section>
      <div className="padded-container">
        <div className="tile is-ancestor">
          <div className="tile is-vertical is-8">
            {posts.nodes.map(node => (
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
                      <div className="content">{node.excerpt}</div>
                    </div>
                    <footer className="card-footer">
                      <div className="card-footer-item">
                        {node.frontmatter.date}
                      </div>
                      <div className="card-footer-item">
                        {node.timeToRead} min read
                      </div>
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
                          ? "/blog/"
                          : `/blog/tags/${fieldValue}/`
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
