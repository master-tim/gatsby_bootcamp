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
      
    </Layout>
  );
};

export default IndexPage;
