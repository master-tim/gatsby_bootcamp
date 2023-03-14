import { Link } from "gatsby";
import React from "react";
import Layout from "../components/layout";

const AboutPage = () => {
  return (
    <Layout>
      <h1>Tim</h1>
      <h2>I'm Tim, a front-end devloper living in beautiful Seoul.</h2>
      <p>
        <Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  );
};

export default AboutPage;
