import { Link } from "gatsby";
import React from "react";

import * as styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
        <Link className={styles.title} to="/">
          Temirlan Dzhoroev
        </Link>
      </h1>
      <ul className={styles.navList}>
        <li>
          <Link
            className={styles.navItem}
            activeClassName={styles.activeNavItem}
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={styles.navItem}
            activeClassName={styles.activeNavItem}
            to="/about"
          >
            About me
          </Link>
        </li>
        <li>
          <Link
            className={styles.navItem}
            activeClassName={styles.activeNavItem}
            to="/blog"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            className={styles.navItem}
            activeClassName={styles.activeNavItem}
            to="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;