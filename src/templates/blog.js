import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      excerpt
      html
    }
  }
`;

const Blog = (props) => {
  return <Layout>
    <h3>{props.data.markdownRemark.frontmatter.title}</h3>
    <p>{props.data.markdownRemark.frontmatter.date}</p>
    <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
  </Layout>;
};

export default Blog;
