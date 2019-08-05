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
              <Link key={node.id} to={node.fields.slug}>
                <div className="tile is-parent">
                  <article className="tile is-child notification">
                    <p className="title">{node.frontmatter.title}</p>
                    <div className="content">{node.excerpt}</div>
                  </article>
                </div>
              </Link>
            ))}
          </div>
          <div className="tile is-vertical is-parent">
            <article className="tile is-child">
              <p className="title">Tags</p>
              <div className="tags are-medium">
                {tags.group.map(({ fieldValue, totalCount }) => (
                  <span key={fieldValue} className="tag">
                    <Link to={`/blog/tags/${fieldValue}`}>
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
