import { Link } from "gatsby";
import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";

const AboutPage = () => {
  return (
    <div>
      <Header />
      <h1>Tim</h1>
      <h2>I'm Tim, a front-end devloper living in beautiful Seoul.</h2>
      <p>
        <Link to="/contact">Contact me</Link>
      </p>
      <Footer />
    </div>
  );
};

export default AboutPage;
