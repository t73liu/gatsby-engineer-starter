import React, { Fragment } from "react";
import { Link } from "gatsby";
import SEO from "./seo";
import BlogPreview from "./blog-preview";

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
                  <BlogPreview {...node} />
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
