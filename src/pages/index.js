import React, { useRef, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { Canvas } from '@react-three/fiber'
import { Box } from '@chakra-ui/react'

import Header from '../components/header'
import Footer from '../components/footer'
import Experience from '../components/Experience'
import Head from '../components/head'

const MyScene = () => {
	return (
		<>
			<Canvas
				shadowMap
				dpr={[1, 2]}
				camera={{ position: [30, 0, 5] }}
				style={{ minHeight: '100vh', minWidth: '75vw' }}>
				<Experience />
			</Canvas>
		</>
	)
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
	`)
	return (
		<Box>
			<Head title='Home' />
			<Header />
			<MyScene />
			<Footer />
		</Box>
	)
}

export default IndexPage
