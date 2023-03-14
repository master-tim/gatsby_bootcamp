import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import * as styles from "./footer.module.scss";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `);
  return (
    <footer className={styles.footer}>
      <p>Created by {data.site.siteMetadata.author}, © 2023</p>
    </footer>
  );
};

export default Footer;
