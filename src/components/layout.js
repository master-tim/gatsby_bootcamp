import React from "react";

import Header from "./header";
import Footer from "./footer";
// import "../styles/index.scss";
import * as styles from "./layout.module.scss";

import { Box, Text } from "@chakra-ui/react";

const Layout = (props) => {
  return (
    <Box p={8}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Header />
          {props.children}
        </div>
        <Footer />
      </div>
    </Box>
  );
};

export default Layout;
