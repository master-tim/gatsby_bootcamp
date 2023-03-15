import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

import { Box, HStack, Text, Heading } from "@chakra-ui/react";

const Header = () => {
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
    <Box
      // position="fixed"
      width="100vw"
      justifyContent="space-around"
      backgroundColor="whitesmoke"
      zIndex={999}
    >
      <Box maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
              <Heading size="lg">
                <Link to="/">Tim</Link>
              </Heading>
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <Text
                _hover={{
                  color: "#ed7966",
                }}
              >
                <Link to="/">Home</Link>
              </Text>
              <Text
                _hover={{
                  color: "#ed7966",
                }}
              >
                <Link to="/about">About me</Link>
              </Text>
              <Text
                _hover={{
                  color: "#ed7966",
                }}
              >
                <Link to="/blog">Blog</Link>
              </Text>
              <Text
                _hover={{
                  color: "#ed7966",
                }}
              >
                <Link to="/contact">Contact</Link>{" "}
              </Text>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
