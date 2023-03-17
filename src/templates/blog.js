import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import { Box, Divider, HStack, Heading, Spacer, Text, VStack, useColorModeValue, extendTheme, ChakraProvider } from "@chakra-ui/react"
import { Prose, withProse } from "@nikolovlazar/chakra-ui-prose";

import Layout from '../components/layout'
import Head from '../components/head'



const theme = extendTheme({}, withProse({}));

export const query = graphql`
	query ($slug: String!) {
		contentfulBlogPost(slug: { eq: $slug }) {
			title
			publishedDate(formatString: "MMMM Do, YYYY")
			body {
				raw
				references {
					contentful_id
					title
					url
				}
			}
		}
	}
`

const Blog = (props) => {

	const stylesSpecial= useColorModeValue('#1C77C3', '#FFEB3B');
	const neutralColor= useColorModeValue('gray.500', 'gray.500');
	const textColor= useColorModeValue('gray.900', 'gray.100');
	const colorsReversed = useColorModeValue('gray.100', 'gray.900');

	const richTextDocument = JSON.parse(props.data.contentfulBlogPost.body.raw);

	// console.log(richTextDocument.content[0].content[0].value);

	const assets = new Map(
		props.data.contentfulBlogPost.body.references.map((ref) => [
			ref.contentful_id,
			ref,
		])
	)

	const options = {
		renderNode: {
			[BLOCKS.EMBEDDED_ASSET]: (node) => {
				const url = assets.get(node.data.target.sys.id).url
				const alt = assets.get(node.data.target.sys.id).fileName
				return (
					<img
						alt={alt}
						src={url}
					/>
				)
			},
		},
	}

	const data = documentToReactComponents(
		richTextDocument,
		options
	);
	console.log(data);
	
	return (
		
			<Layout>
				<ChakraProvider theme={theme}>
				<Head title={`${props.data.contentfulBlogPost.title}`} />
				<VStack color={textColor} w="100%" paddingTop={10} >
					<HStack w="100%">
						<Heading size="xl">{props.data.contentfulBlogPost.title}</Heading>
						<Spacer />
					</HStack>
					<HStack w="100%">
						<Text color={neutralColor} fontStyle="italic">{props.data.contentfulBlogPost.publishedDate}</Text>
						<Spacer />
					</HStack>
					<Divider paddingTop={3} />
					<Box paddingTop={3} w="100%">
						<Prose>
							{documentToReactComponents(
								richTextDocument,
								options
							)}
						</Prose>
					</Box>
				</VStack>

		</ChakraProvider>
			</Layout>
	)
}

export default Blog
