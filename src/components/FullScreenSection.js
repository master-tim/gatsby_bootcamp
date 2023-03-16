import * as React from 'react'
import { VStack } from '@chakra-ui/react'

const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
	return (
		<VStack
			backgroundColor={boxProps.backgroundColor}
			color={isDarkBackground ? 'white' : 'black'}
			>
			<VStack
				minHeight='70vh'
				{...boxProps}>
				{children}
			</VStack>
		</VStack>
	)
}

export default FullScreenSection
