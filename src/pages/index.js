import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import Head from "../components/head";

const IndexPage = () => {
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
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello.</h1>
      <h2>I'm {data.site.siteMetadata.author}</h2>
      <h3>UX Engineer Front-end Engineer Interaction Designer</h3>
      <p>
        <a href="/contact"> Need developer? </a>
      </p>
      <p>
        <Link to="/contact"> Need developer? </Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
