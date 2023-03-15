import React, { useRef, useState } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { Box, VStack } from "@chakra-ui/react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

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
      style={{ minHeight: "100vh", minWidth: "90vw" }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      <Boxx position={[-1.2, 0, 0]} />
      <Boxx position={[1.2, 0, 0]} />
    </Canvas>
  );
};

function Boxx(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.x += delta));

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

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
