import React from "react";
import Layout from "../components/layout";
import { graphql, useStaticQuery } from "gatsby";

const handleBlogList = (prop) => {
  return prop.map((data) => (
    <li key={data.node.frontmatter.title}>
      <h2>{data.node.frontmatter.title}</h2>
      <p>{data.node.frontmatter.date}</p>
      <p>{data.node.excerpt}</p>
    </li>
  ));
};

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
      <ol>{handleBlogList(blogData.allMarkdownRemark.edges)}</ol>
    </Layout>
  );
};

export default BlogPage;
