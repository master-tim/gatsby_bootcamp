import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Head from '../components/head'
import * as styles from './blog.module.scss'

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

	return (
		<Layout>
			<Head title='Blog' />
			<p className={styles.latest}>Latest</p>
			<ol className={styles.posts}>
				{blogData.allContentfulBlogPost.edges.map((data) => {
					return (
						<li
							className={styles.post}
							key={data.node.title}>
							<Link to={`/blog/${data.node.slug}`}>
								<h2>{data.node.title} </h2>
								<p>{data.node.publishedDate}</p>
							</Link>
						</li>
					)
				})}
			</ol>
		</Layout>
	)
}

export default BlogPage
