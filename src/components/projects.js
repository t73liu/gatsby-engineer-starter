import React, { Fragment } from "react";
import SEO from "./seo";
import { Link } from "gatsby";
import ProjectPreview from "./project-preview";

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
                  <ProjectPreview {...node} />
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
