import React from "react";

import Header from "./header";
import Footer from "./footer";
import FullScreenSection from "./FullScreenSection";

import { Box, VStack } from "@chakra-ui/react";

const Layout = (props) => {
  return (
    <Box>
      <VStack >
        <Header />
        <FullScreenSection width="90vw" marginTop="60px">
          {props.children}
        </FullScreenSection>
        <Footer />
      </VStack>
    </Box>
  );
};

export default Layout;
