import React, { Fragment } from "react";
import { graphql } from "gatsby";
import SEO from "../components/seo";

export default ({ data, pageContext: { tag } }) => {
  return (
    <Fragment>
      <SEO title={`Tag | ${tag}`} />
      <section className="hero is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">{`Tag: ${tag}`}</h1>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export const query = graphql`
  query($tag: String!) {
    markdownRemark(fields: { slug: { eq: $tag } }) {
      html
      frontmatter {
        title
        date
        tags
      }
    }
  }
`;
