import React, { useRef, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";

import { Canvas } from "@react-three/fiber";
import { Box } from "@chakra-ui/react";

import Header from "../components/header";
import Footer from "../components/footer";
import Experience from "../components/Experience";


const MyScene = () => {
  return (
    <Canvas
      shadowMap
      camera={{
        fov: 45,
        near: 0.1,
        far: 2000,
        position: [0, 1.5, 4],
      }}
      style={{ minHeight: "100vh", minWidth: "75vw" }}
    >
      <Experience />
    </Canvas>
  );
};

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
    <Box>
      <Header />
      <MyScene />
      <Footer />
    </Box>
  );
};

export default IndexPage;
