import React from "react";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <div>
      <h1>Hello.</h1>
      <h2>I'm Tim, a front-end devloper living in beautiful Seoul.</h2>
      <p>
        <a href="/contact"> Need developer? </a>
      </p>
      <p>
        <Link to="/contact"> Need developer? </Link>
      </p>
    </div>
  );
};

export default IndexPage;
