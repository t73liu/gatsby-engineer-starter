import React, { Fragment } from "react";
import { graphql } from "gatsby";
import SEO from "../components/seo";
import BlogPreview from "../components/blog-preview";
import ProjectPreview from "../components/project-preview";

export default ({ data: { posts, projects } }) => (
  <Fragment>
    <SEO title="Home" />
    <section className="hero is-primary is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Welcome</h1>
        </div>
      </div>
    </section>
    <div className="padded-container">
      <div className="columns">
        <div className="column is-one-quarter">
          <div className="card">
            <div className="card-image">
              <figure className="image is-4by3">
                <img
                  src="https://bulma.io/images/placeholders/1280x960.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div className="card-content">
              <p className="title is-4">John Smith</p>
              <p className="subtitle is-6">@johnsmith</p>
              <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
                <ul>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>GraphQL</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div>
            <div className="title">Recent Posts</div>
            {posts.nodes.map(node => (
              <div key={node.id} className="tile is-parent">
                <article className="tile is-child">
                  <BlogPreview {...node} />
                </article>
              </div>
            ))}
          </div>
        </div>
        <div className="column">
          <div>
            <p className="title">Recent Projects</p>
            {projects.nodes.map(node => (
              <div key={node.id} className="tile is-parent">
                <article className="tile is-child">
                  <ProjectPreview {...node} />
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);

export const query = graphql`
  query {
    posts: allMarkdownRemark(
      limit: 2
      filter: { fields: { slug: { regex: "//posts//" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        id
        timeToRead
        excerpt
        frontmatter {
          title
          date
          tags
        }
        fields {
          slug
        }
      }
    }
    projects: allMarkdownRemark(
      limit: 2
      filter: { fields: { slug: { regex: "//projects//" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        id
        frontmatter {
          title
          date
          description
          tags
          source
          demo
          image
        }
        fields {
          slug
        }
      }
    }
  }
`;
