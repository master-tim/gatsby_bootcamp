import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello.</h1>
      <h2>
        I'm{" "}
        <Link to="https://www.linkedin.com/in/dzhoroev7/" target="_blank">
          Tim
        </Link>
        , a front-end devloper living in beautiful Seoul.
      </h2>
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
