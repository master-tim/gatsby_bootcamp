import React from "react";
import Layout from "../components/layout";
import { Link, graphql, useStaticQuery } from "gatsby";

const BlogPage = () => {
  const blogData = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            html
            excerpt
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <h1>Blog</h1>
      <ol>
        {blogData.allMarkdownRemark.edges.map((data) => (
          <li key={data.node.frontmatter.title}>
            <h2>{data.node.frontmatter.title}</h2>
            <p>{data.node.frontmatter.date}</p>
          </li>
        ))}
      </ol>
    </Layout>
  );
};

export default BlogPage;
