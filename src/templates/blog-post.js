import React, { Fragment } from "react";
import { graphql } from "gatsby";
import SEO from "../components/seo";

export default ({ data }) => {
  const title = data.markdownRemark.frontmatter.title;
  return (
    <Fragment>
      <SEO title={title} />
      <div className="container">
        <h1 className="is-size-1">{title}</h1>
        <h1 className="is-size-3">{data.markdownRemark.frontmatter.date}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
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
      }
    }
  }
`;
