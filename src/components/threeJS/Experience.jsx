// custom
import React from "react";
import * as THREE from "three";
import {useRef, useState, useMemo, useEffect, Suspense} from "react";
import {useFrame} from "@react-three/fiber";
import {Text, OrbitControls} from "@react-three/drei";
import {LayerMaterial, Base, Depth, Fresnel} from 'lamina'

const skills = [
    "JavaScript",
    "TypeScript",
    "gatsby",
    "REST",
    "HTML",
    "CSS",
    "React",
    "Three.js",
    "R3F",
    "GraphQL",
    "Flask",
    "Socket",
    "SQL",
    "webGL",
    "C++",
    "Python",
    "mbed",
    "ROS",
    "Java",
    "Swift",
    "Firebase",
    "OpenGL",
    "OpenCV",
    "Korean",
    "Teamwork",
    "Algorithms",
    "Data Structure",
    "Creativity",
    "UX/UI",
    "Research",
    "Interaction Design",
    "OOP",
    "Adobe",
    "Git",
    "HCI",
    "HRI",
];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let returnedSkills = [];

function randomSkill() {
    if (returnedSkills.length === skills.length) { // check if all skills have been returned
        returnedSkills = []; // reset the array of previously returned skills
    }

    let availableSkills = skills.filter((skill) => ! returnedSkills.includes(skill));
    if (availableSkills.length === 0) {
        return "No more skills left";
    }

    let randomIndex = getRandomInt(availableSkills.length);
    let randomSkill = availableSkills[randomIndex];
    returnedSkills.push(randomSkill);
    return randomSkill;
}

function Word({
    children,
    ...props
}) {
    const color = new THREE.Color();
    const fontProps = {
        font: "/../static/Inter-Bold.woff",
        fontSize: 2.5,
        letterSpacing: -0.05,
        lineHeight: 1,
        "material-toneMapped": false
    };
    const ref = useRef();
    const [hovered, setHovered] = useState(false);
    const over = (e) => (e.stopPropagation(), setHovered(true));
    const out = () => setHovered(false);
    // Change the mouse cursor on hover
    useEffect(() => {
        if (hovered) {
            document.body.style.cursor = "pointer";
        }
        return() => (document.body.style.cursor = "auto");
    }, [hovered]);
    // Tie component to the render-loop
    useFrame(({camera}) => { // Make text face the camera
        ref.current.quaternion.copy(camera.quaternion);
        ref.current.material.color.lerp(color.set(hovered ? "#1C77C3" : "white"), 0.1);
    });

    return (
        <Text ref={ref}
            onPointerOver={over}
            onPointerOut={out}
            {...props}
            {...fontProps}
            children={children}/>
    );
}
function Cloud({
    count = 4,
    radius = 20
}) { // Create a count x count random words with spherical distribution

    const words = useMemo(() => {
        const temp = [];
        const spherical = new THREE.Spherical();
        const phiSpan = Math.PI / (count + 1);
        const thetaSpan = (Math.PI * 2) / count;
        for (let i = 1; i < count + 1; i++) {
            for (let j = 0; j < count; j++) {
                temp.push([
                    new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)),
                    randomSkill(),
                ]);
            }
        }
        return temp;
    }, [count, radius]);

    return words.map(([
        pos, word
    ], index) => (
        <Word key={index}
            position={pos}
            children={word}/>
    ));
}
export default function Experience() {

    const atom = useRef();
    const atom1 = useRef();
    const atom2 = useRef();

    const props = {
        base: {
            value: '#ff4eb8'
        },
        colorA: {
            value: '#00ffff'
        },
        colorB: {
            value: '#ff8f00'
        }
    }

    useFrame(({camera, clock}) => {
        atom.current.position.x = Math.sin(clock.elapsedTime) * 21
        atom.current.position.y = Math.cos(clock.elapsedTime) * 21
        atom.current.position.z = Math.sin(clock.elapsedTime) * 21
        atom1.current.position.x = Math.cos(clock.elapsedTime) * 21
        atom1.current.position.y = Math.sin(clock.elapsedTime) * 21
        atom1.current.position.z = Math.sin(clock.elapsedTime) * 21
        atom2.current.position.x = Math.cos(clock.elapsedTime) * 21
        atom2.current.position.z = Math.sin(clock.elapsedTime) * 21
    });

    return (
        <>
            <ambientLight/>
            <fog attach="fog"
                args={
                    ["#202020", 0, 80]
                }/>
            <Cloud count={8}
                radius={20}/>

            <mesh ref={atom}
                position={
                    [22, 0, 0]
            }>
                <sphereBufferGeometry args={
                    [.5, 12, 12]
                }/>
                <meshBasicMaterial color="hotpink"/>
            </mesh>
            <mesh ref={atom1}
                position={
                    [22, 0, 0]
            }>
                <sphereBufferGeometry args={
                    [.5, 12, 12]
                }/>
                <meshBasicMaterial color="hotpink"/>
            </mesh>
            <mesh ref={atom2}
                position={
                    [22, 0, 0]
            }>
                <sphereBufferGeometry args={
                    [.5, 12, 12]
                }/>
                <meshBasicMaterial color="hotpink"/>
            </mesh>
            <OrbitControls enableZoom={true}/>
        </>
    );
}
