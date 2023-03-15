import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import {
  Box,
  Flex,
  Text,
  Avatar,
  HStack,
  Heading,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          name
          nickname
        }
      }
    }
  `);

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4} width="100vw">
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />

          <HStack spacing={8} alignItems={"center"} marginLeft="1rem">
            <Heading>
              <Link to="/">{data.site.siteMetadata.nickname}</Link>
            </Heading>
            <HStack as={"nav"} spacing={4}>
              <Link
                to="/about"
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
              >
                About
              </Link>

              <Link
                to="/blog"
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
              >
                Blogs
              </Link>

              <Link
                to="/contact"
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
              >
                Contact
              </Link>
            </HStack>
          </HStack>

          <Flex alignItems={"center"} marginRight="1rem">
            <Avatar
              size={"sm"}
              src={
                "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
              }
            />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {/* {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))} */}

              <Link to="/blog">Blog</Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

// const Header = () => {

//   return (
//     <Box
//       position="fixed"
//       width="100vw"
//       justifyContent="space-around"
//       backgroundColor="whitesmoke"
//       zIndex={999}
//     >
//       <Box maxWidth="1280px" margin="0 auto">
//         <HStack
//           px={16}
//           py={4}
//           justifyContent="space-between"
//           alignItems="center"
//         >
//           <nav>
//             <HStack spacing={8}>
//               <Heading size="lg">
//                 <Link to="/">Tim</Link>
//               </Heading>
//             </HStack>
//           </nav>
//           <nav>
//             <HStack spacing={8}>
//               <Text
//                 _hover={{
//                   color: "#ed7966",
//                 }}
//               >
//                 <Link to="/">Home</Link>
//               </Text>
//               <Text
//                 _hover={{
//                   color: "#ed7966",
//                 }}
//               >
//                 <Link to="/about">About me</Link>
//               </Text>
//               <Text
//                 _hover={{
//                   color: "#ed7966",
//                 }}
//               >
//                 <Link to="/blog">Blog</Link>
//               </Text>
//               <Text
//                 _hover={{
//                   color: "#ed7966",
//                 }}
//               >
//                 <Link to="/contact">Contact</Link>{" "}
//               </Text>
//             </HStack>
//           </nav>
//         </HStack>
//       </Box>
//     </Box>
//   );
// };

export default Header;
