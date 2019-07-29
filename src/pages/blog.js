import React, { Fragment } from "react";
import { Link, graphql } from "gatsby";
import SEO from "../components/seo";

export default ({ data }) => (
  <Fragment>
    <SEO title="Blog" />
    <section className="hero is-primary is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Blog</h1>
        </div>
      </div>
    </section>
    <div className="container">
      <div className="tile is-ancestor">
        <div className="tile is-vertical is-12">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Link to={node.fields.slug}>
              <div className="tile is-parent">
                <article className="tile is-child notification">
                  <p className="title">{node.frontmatter.title}</p>
                  <div className="content">{node.excerpt}</div>
                </article>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  </Fragment>
);

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
