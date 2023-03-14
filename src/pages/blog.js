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
            fields{
              slug
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
            <h2><Link to={`/blog/${data.node.fields.slug}`}>{data.node.frontmatter.title}</Link></h2>
            <p>{data.node.frontmatter.date}</p>
          </li>
        ))}
      </ol>
    </Layout>
  );
};

export default BlogPage;
