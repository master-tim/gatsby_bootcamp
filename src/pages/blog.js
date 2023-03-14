import React from "react";
import Layout from "../components/layout";
import { Link, graphql, useStaticQuery } from "gatsby";
import * as styles from "./blog.module.scss";
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
            fields {
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
      <ol className={styles.posts}>
        {blogData.allMarkdownRemark.edges.map((data) => {
          return (
            <li className={styles.post} key={data.node.frontmatter.title}>
              <Link to={`/blog/${data.node.fields.slug}`}>
                <h2>{data.node.frontmatter.title} </h2>
                <p>{data.node.frontmatter.date}</p>
              </Link>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
};

export default BlogPage;
