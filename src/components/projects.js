import React, { Fragment } from "react";
import { Link } from "gatsby";
import { chunk } from "lodash";
import SEO from "./seo";
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
        <div className="columns">
          <div className="column is-three-quarters">
            {chunk(projects.nodes, 2).map((row, index) => (
              <div key={index} className="tile is-ancestor">
                {row.map(node => (
                  <div key={node.id} className="tile is-parent is-6">
                    <article className="tile is-child">
                      <ProjectPreview {...node} />
                    </article>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="column">
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
