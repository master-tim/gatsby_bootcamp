import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

import { Box, HStack, Text } from "@chakra-ui/react";

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
              <Text fontSize="2xl" color="white">
                <Link to="/">{data.site.siteMetadata.author}</Link>
              </Text>
              <a href="https://github.com/master-tim">
                {" "}
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a href="https://www.linkedin.com/in/dzhoroev7/">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a>
                <FontAwesomeIcon icon={faMedium} size="2x" />
              </a>
              <a>
                <FontAwesomeIcon icon={faStackOverflow} size="2x" />
              </a>
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <Link to="/">Home</Link>
              <Link to="/about">About me</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/contact">Contact</Link>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
