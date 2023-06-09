import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Box, Square, Flex, Center } from '@chakra-ui/react'
import {Canvas} from "@react-three/fiber"
import {OrbitControls} from "@react-three/drei"

import Layout from '../components/layout'
import Head from '../components/head'
import TextAnim from '../components/threeJS/TextAnim'
import ImagePlane from '../components/threeJS/ImagePlane'
import AnimatedText from '../components/animationJS/AnimatedText'

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
	`)
	return (
		<Layout>
			<Head title='About me' />
			<Flex 
				minWidth="80vw"
				h="70vh"
			>
				<Square w='30vw' >
					<Canvas dpr={[1, 2]} 
					camera={[0,0,0]}
					>
						<ImagePlane size={6} position={[0,0,0]}/>
					</Canvas>
				</Square>
				<Center w='100px' >
				</Center>
				<Box>
					<AnimatedText />
				</Box>
			</Flex>
		</Layout>
	)
}

export default AboutPage



				// <VStack
				// 	spacing={8}
				// 	justifyContent='center'
				// 	alignItems='center'>
				// 	<Heading>{data.site.siteMetadata.author}</Heading>
				// 	<Heading size='md'>
				// 		UX Engineer . Front-end Engineer . Interaction Designer
				// 	</Heading>
				// 	<Text
				// 		size='xl'
				// 		maxW='50vw'
				// 		textAlign='center'>
				// 		I am keen on pursuing opportunities in the field of user experience
				// 		and web development. My goal is to use my design and technical
				// 		skills to create intuitive, accessible, and engaging digital
				// 		products.
				// 	</Text>
				// 	<Text
				// 		color='#ed7966'
				// 		_hover={{
				// 			color: '#f5cac2',
				// 		}}>
				// 		<Link to='/contact'> Need developer? </Link>
				// 	</Text>
				// </VStack>


				// <TextAnim color="#3f3f3f" position={[3,2,0]} text="Hi there!" scaleArr={[.5,.5,.5]} delay={300}/>
				// <TextAnim color="#3f3f3f" position={[3,1.45,0]} text="I am" scaleArr={[.2,.2,.2]} delay={300}/>
				// <TextAnim color="#3f3f3f" position={[3,0.8,0]} text="D. Temirlan" scaleArr={[.9,.9,.9]} delay={600}/>

				// <TextAnim color="#3f3f3f" position={[3.92,0,0]} text="&" scaleArr={[0.2,0.2,0.2]} delay={900}/>
				// <TextAnim color="#3f3f3f" position={[3,0,0]} text="Frontend   UX" scaleArr={[0.7,0.7,0.7]} delay={900}/>
				// <TextAnim color="#3f3f3f" position={[3,-0.9,0]} text="Engineer" scaleArr={[1,1,1]} delay={1200}/>