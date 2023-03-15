import { Link, graphql, useStaticQuery } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import Head from "../components/head";

const AboutPage = () => {
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
      <Head title="About me" />
      <h1>{data.site.siteMetadata.author}</h1>
      <p>
        I am keen on pursuing opportunities in the field of user experience and
        web development. My goal is to use my design and technical skills to
        create intuitive, accessible, and engaging digital products.
      </p>
      <p>
        <Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  );
};

export default AboutPage;
