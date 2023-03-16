import { Link, graphql, useStaticQuery } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import Head from "../components/head";

import { Box, HStack, Text, Heading, VStack } from "@chakra-ui/react";

const AboutPage = () => {
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
      <Head title="About me" />
      <Box>
        <VStack spacing={8} justifyContent="center" alignItems="center">
          <Heading>{data.site.siteMetadata.author}</Heading>
          <Heading size="md">
            UX Engineer . Front-end Engineer . Interaction Designer
          </Heading>
          <Text size="xl" maxW="50vw" textAlign="center">
            I am keen on pursuing opportunities in the field of user experience
            and web development. My goal is to use my design and technical
            skills to create intuitive, accessible, and engaging digital
            products.
          </Text>
          <Text
            color="#ed7966"
            _hover={{
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

export default AboutPage;
