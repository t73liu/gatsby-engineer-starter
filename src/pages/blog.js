import { Link, graphql } from "gatsby";
import { flatMap, mapValues, groupBy } from "lodash";
import React, { Fragment } from "react";
import SEO from "../components/seo";

export default ({ data }) => {
  const tags = mapValues(
    groupBy(
      flatMap(data.allMarkdownRemark.edges, ({ node }) => node.frontmatter.tags)
    ),
    arr => arr.length
  );
  return (
    <Fragment>
      <SEO title="Blog" />
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
            {data.allMarkdownRemark.edges.map(({ node }) => (
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
                {Object.keys(tags)
                  .sort()
                  .map(tag => (
                    <span key={tag} className="tag">
                      <Link to={`/blog/tags/${tag}`}>
                        {tag} ({tags[tag]})
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
            tags
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
