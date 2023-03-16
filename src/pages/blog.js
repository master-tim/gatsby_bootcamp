import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { Box, Divider, Flex, HStack, Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react"

import Head from '../components/head'
import Layout from '../components/layout'
import { ArrowForwardIcon } from '@chakra-ui/icons'


const BlogPage = () => {
	const blogData = useStaticQuery(graphql`
		query {
			allContentfulBlogPost(sort: { publishedDate: DESC }) {
				edges {
					node {
						title
						slug
						publishedDate(formatString: "MMMM Do, YYYY")
					}
				}
			}
		}
	`)

	const stylesSpecial= useColorModeValue('#1C77C3', '#FFEB3B');
	const stylesBasic= useColorModeValue('gray.500', 'gray.500');
	const stylesBasics= useColorModeValue('gray.900', 'gray.200');
	const colorsReversed = useColorModeValue('gray.100', 'gray.900');

	return (
		<Layout>
		<Head title='Blog'/>
			<Stack spacing={3} paddingTop="5vh" minW="80vw"  color={stylesBasic} >
				<HStack>
					<Text fontSize="xl" fontStyle="italic">Resent Blogs</Text>
					<Box/>
				</HStack>
				<Box p={3}/>
				{blogData.allContentfulBlogPost.edges.map((data) => {
					return (<>
						<Divider/>
						<Box
							color={stylesBasics}
							justifyContent="space-around"
							paddingTop={5}
							key={data.node.title}
							borderRadius="30px"
							h="200px"
						>
							<Heading size='xl'>{data.node.title} </Heading>
							<Text 
								paddingTop={3}
								fontStyle="italic"
								color={stylesBasic}
							>{data.node.publishedDate}</Text>
							<HStack 
								paddingTop={3} 
							> 
								<Link to={`/blog/${data.node.slug}`}> 
									<HStack 
										justifyContent="center" 
										minWidth="150px" 
										minHeight="50px" 
										border="2px" 
										borderColor={stylesSpecial}
										borderRadius="20px"
										_hover={{ 
											bg: `${stylesSpecial}`, 
											color:`${colorsReversed}`
										}}
									>
										<Text >Read more</Text>
										<ArrowForwardIcon/>
									</HStack>
								</Link> 
									<Box />
								</HStack>

						</Box>
						</>
					)
				})}

			</Stack>
		</Layout>
	)
}

export default BlogPage
