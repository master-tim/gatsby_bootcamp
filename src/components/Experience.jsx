// custom
import React from "react";
import * as THREE from "three";
import {useRef, useState, useMemo, useEffect} from "react";
import {useFrame} from "@react-three/fiber";
import {Text, OrbitControls} from "@react-three/drei";

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
        font: "/Inter-Bold.woff",
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
        if (hovered) 
            document.body.style.cursor = "pointer";
        


        return() => (document.body.style.cursor = "auto");
    }, [hovered]);
    // Tie component to the render-loop
    useFrame(({camera}) => { // Make text face the camera
        ref.current.quaternion.copy(camera.quaternion);
        // Animate font color
        ref.current.material.color.lerp(color.set(hovered ? "#fa2720" : "white"), 0.1);
    });
    return (<Text ref={ref}
        onPointerOver={over}
        onPointerOut={out}
        onClick={
            () => console.log("clicked")
        }
        {...props}
        {...fontProps}
        children={children}/>);
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
        for (let i = 1; i < count + 1; i++) 
            for (let j = 0; j < count; j++) 
                temp.push([
                    new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)),
                    randomSkill(),
                ]);
            
        


        return temp;
    }, [count, radius]);

    return words.map(([
        pos, word
    ], index) => (<Word key={index}
        position={pos}
        children={word}/>));
}
export default function Experience() {
    return (<>
        <fog attach="fog"
            args={
                ["#202020", 0, 80]
            }/>

        <Cloud count={8}
            radius={20}/>
        <OrbitControls enableZoom={false}/>
    </>);
}
