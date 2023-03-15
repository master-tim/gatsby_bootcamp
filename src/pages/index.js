import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { Box, VStack } from "@chakra-ui/react";
import { Canvas } from "@react-three/fiber";

import Header from "../components/header";
import Footer from "../components/footer";
import FullScreenSection from "../components/FullScreenSection";

const MyScene = () => {
  return (
    <Canvas
      camera={{
        fov: 45,
        near: 0.1,
        far: 2000,
        position: [-3, 1.5, 4],
      }}
      style={{ minHeight: "100vh" }}
    >
      {/* <color args={["#ffffff"]} attach="background" /> */}
      <directionalLight
        castShadow
        position={[-2, 5, 10]}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        intensity={1}
      />
      <mesh castShadow>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>

      <mesh
        rotation={[-0.5 * Math.PI, 0, 0]}
        position={[0, -1, 0]}
        receiveShadow
      >
        <planeBufferGeometry args={[10, 10, 1, 1]} />
        <shadowMaterial transparent opacity={0.3} />
      </mesh>
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
      <VStack width="100vw" minHeight="100vh">
        {/* <Box
          display="flex"
          justifyContent="center"
          backgroundColor="black"
          minWidth="90vw"
          minHeight="80vh"
          marginTop="60px"
        > */}
        <MyScene />
        {/* </Box> */}
        <Footer />
      </VStack>
    </Box>
  );
};

export default IndexPage;
