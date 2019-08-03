import React, { Fragment } from "react";
import { graphql } from "gatsby";
import SEO from "../components/seo";

export default ({ data }) => {
  const { title, date, tags } = data.markdownRemark.frontmatter;
  return (
    <Fragment>
      <SEO title={title} />
      <section className="hero is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">{title}</h1>
            <h2 className="subtitle">{date}</h2>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="hero-body">
          <div
            className="content is-medium"
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
          />
        </div>
        <div className="hero-foot tags are-medium">
          {tags.map(tag => (
            <span key={tag} className="tag is-link">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        tags
      }
    }
  }
`;
