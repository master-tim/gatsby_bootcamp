import React from "react";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import Layout from "../components/layout";

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        raw
        references {
          file {
            fileName
            url
          }
        }
      }
    }
  }
`;

const Blog = (props) => {
  const body = JSON.parse(props.data.contentfulBlogPost.body.raw);

  return (
    <Layout>
      <h3>{props.data.contentfulBlogPost.title}</h3>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      {documentToReactComponents(body)}
    </Layout>
  );
};

export default Blog;
