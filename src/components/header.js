import { Link } from "gatsby";
import React from "react";

import * as styles from "./header.module.scss"

const Header = () => {
  return (
    <header>
        <h1>Tims, front-end dev.</h1>
      <ul>
        <li>
          <Link className={`${styles.main}`} to="/">Main</Link>
        </li>
        <li>
          <Link to="/about">About me</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
