import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import Head from '../components/head'

const NotFound = () => (
	<Layout>
		<Head title='404' />
		<h1>Oops, this page doesn't exist</h1>
		<p>
			<Link to='/'>Head home.</Link>
		</p>
	</Layout>
)

export default NotFound
