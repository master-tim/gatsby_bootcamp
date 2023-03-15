import React,{useRef, useState} from "react"
import {useFrame, extend} from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

function Boxx(props) {
    const mesh = useRef();

    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);

    useFrame((state, delta) => {
        if (active) {
            mesh.current.rotation.x += delta;
        }
    });

    return (<mesh {...props}
        ref={mesh}
        onClick={
            (event) => setActive(!active)
        }
        onPointerOver={
            (event) => setHover(true)
        }
        onPointerOut={
            (event) => setHover(false)
    }>
        <boxGeometry args={
            [10, 0.5, 0.5]
        }/>
        <meshStandardMaterial color={
            hovered ? "hotpink" : "orange"
        }/>
    </mesh>);
}


const Experience = () => {
    return (<>
        <OrbitControls />
        <ambientLight/> {/* <pointLight position={[10, 10, 10]} /> */}
        <directionalLight intensity={0.5}
            castShadow
            shadow-mapSize-height={512}
            shadow-mapSize-width={512}/>

        <Boxx position={
            [0, 1, 0]
        }/>
        <Boxx position={
            [0, 0, 0]
        }/>
        <Boxx position={
            [0, -1, 0]
        }/>
        <Boxx position={
            [0, -2, 0]
        }/></>)
}

export default Experience
