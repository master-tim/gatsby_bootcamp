import React from 'react'
import {Text} from '@react-three/drei'
import {animated, useSpring} from '@react-spring/three'

export default function TextAnim(props) {
    return (<BouncyHello {...props} />)
}

const AnimatedText = animated(Text)

function BouncyHello(props) {
    const spring = useSpring({
        from: {
            scale: [0, 0, 0]
        },
        to: {
            scale: props.scaleArr
        },
        config: {
            friction: 4
        },
        delay: props.delay
    })
    return <AnimatedText {...props} {...spring}> {props.text}</AnimatedText>
}
