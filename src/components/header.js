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
      position="fixed"
      top={0}
      left={0}
      right={0}
      backgroundColor="#18181b"
      opacity="80%"
      zIndex={999}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
              <Heading size="md" color="white">
                <Link to="/">{data.site.siteMetadata.author}</Link>
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
