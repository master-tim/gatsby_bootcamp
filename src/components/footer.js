import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

import { Box, HStack } from "@chakra-ui/react";

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
    <Box>
      <HStack px={16} py={4} justifyContent="space-between" alignItems="center">
        <nav>
          <HStack spacing={8}>
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
            <p>Created by {data.site.siteMetadata.author}, © 2023</p>
          </HStack>
        </nav>
      </HStack>
    </Box>
  );
};

export default Footer;

{
  /* <a href="https://github.com/master-tim">
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
              </a> */
}
