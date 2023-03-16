import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
	faGithub,
	faLinkedin,
	faMedium,
	faStackOverflow,
} from '@fortawesome/free-brands-svg-icons'

import { Box, HStack, Flex, Text } from '@chakra-ui/react'

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
	`)
	return (
		<Box>
			<footer>
				<Flex
					margin='0 auto'
					px={12}
					justifyContent='center'
					alignItems='center'
					maxWidth='1024px'
					height={16}>
					<Text fontFamily='monospace'>
						Created by {data.site.siteMetadata.author} © 2023
					</Text>
				</Flex>
			</footer>
		</Box>
		// <Box
		//   position="fixed"
		//   top="90vh"
		//   left={0}
		//   right={0}
		//   backgroundColor="#18181b"
		//   zIndex={999}
		// >
		//   <HStack px={16} py={4} justifyContent="space-between" alignItems="center">
		//     <nav>
		//       <HStack spacing={8}>
		//         <a href="https://github.com/master-tim">
		//           {" "}
		//           <FontAwesomeIcon icon={faGithub} size="2x" />
		//         </a>
		//         <a href="https://www.linkedin.com/in/dzhoroev7/">
		//           <FontAwesomeIcon icon={faLinkedin} size="2x" />
		//         </a>
		//         <a>
		//           <FontAwesomeIcon icon={faMedium} size="2x" />
		//         </a>
		//         <a>
		//           <FontAwesomeIcon icon={faStackOverflow} size="2x" />
		//         </a>
		//       </HStack>
		//     </nav>
		//     <nav>
		//       <HStack spacing={8}>
		//         <p>Created by {data.site.siteMetadata.author}, © 2023</p>
		//       </HStack>
		//     </nav>
		//   </HStack>
		// </Box>
	)
}

export default Footer

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
