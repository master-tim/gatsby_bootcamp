import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const Head = ({title}) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          name
        }
      }
    }
  `);
  return <Helmet title={`${title} | ${data.site.siteMetadata.name}`} />;
};

export default Head;
