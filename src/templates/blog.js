import React from "react";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types"

import Layout from "../components/layout";


export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        raw
        references {
          contentful_id
          title
          url
        }
      }
    }
  }
`;

const Blog = (props) => {

  const assets = new Map(
    props.data.contentfulBlogPost.body.references.map((ref) => [ref.contentful_id, ref])
  );

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        // console.log(assets.get(node.data.target.sys.id));
        const url = assets.get(node.data.target.sys.id).url;
        const alt = assets.get(node.data.target.sys.id).fileName;
        return <img alt={alt} src={url} />;
      },
    },
  };

  return (
    <Layout>
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      {documentToReactComponents(JSON.parse(props.data.contentfulBlogPost.body.raw), options)}
    </Layout>
  );
};

export default Blog;
