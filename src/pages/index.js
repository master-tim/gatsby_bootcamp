import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import Head from "../components/head";

import { Box, HStack, Text, Heading, VStack } from "@chakra-ui/react";

const IndexPage = () => {
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
    <Layout>
      <Box>
        <VStack spacing={8} justifyContent="center" alignItems="center">
          <Head title="Home" />
          <Heading>Hello.</Heading>
          <Heading size="md">I'm {data.site.siteMetadata.author}</Heading>
          <Heading size="sm">
            UX Engineer Front-end Engineer Interaction Designer
          </Heading>
          <Text
            color="#ed7966"
            _hover={{
              background: "white",
              color: "#f5cac2",
            }}
          >
            <Link to="/contact"> Need developer? </Link>
          </Text>
        </VStack>
      </Box>
    </Layout>
  );
};

export default IndexPage;
