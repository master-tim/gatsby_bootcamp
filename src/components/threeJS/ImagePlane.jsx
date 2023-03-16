import React from "react";
import {useFrame, useLoader} from "@react-three/fiber";
import {useEffect, useRef} from "react";
import * as THREE from "three";
import author from "../../img/author.jpg";

import {fragmentShader} from "../../shaders/fragment";
import {vertexShader} from "../../shaders/vertex";
import {gsap} from "gsap";

const IMG_SRC = author;

export default function ImagePlane(props) {
    const ref = useRef();
    const tex = useLoader(THREE.TextureLoader, IMG_SRC);
    const img = useLoader(THREE.ImageLoader, IMG_SRC);

    const PLANE_SIZE = props.size;
    const speed = {
        value: 0.006
    };
    const tilt = {
        x: 0,
        y: 0
    };
    let mouse = useRef(null);

    useEffect(() => {
        const update = (e) => {
            mouse.current = new THREE.Vector2((e.clientX / window.innerWidth) * 2 - 1, -(e.clientY / window.innerHeight) * 2 + 1,)
        }
        window.addEventListener('pointermove', update);
        return() => {
            window.removeEventListener('pointermove', update);
        }
    }, [])

    useFrame(({scene, camera}) => {
        if (ref.current) {
            ref.current.material.uniforms.uTime.value += speed.value;
            gsap.to(ref.current.rotation, {
                x: tilt.y,
                y: tilt.x,
                duration: 0.4
            })
        }
    });

    const handlePointerEnter = (e) => {
        gsap.to(ref.current.material.uniforms.uRadius, {
            value: 1.5,
            duration: 1.8,
            overwrite: true
        })
        gsap.to(speed, {
            value: 0.02,
            duration: 0.5,
            overwrite: true
        })
        gsap.to(ref.current.material.uniforms.uSpikes, {
            value: 2.5,
            duration: 0.8,
            overwrite: true
        })
    }

    const handlePointerLeave = () => {
        gsap.to(ref.current.material.uniforms.uRadius, {
            value: 0.5,
            duration: 0.6,
            overwrite: true
        })
        gsap.to(speed, {
            value: 0.006,
            duration: 1.8,
            overwrite: true
        })
        gsap.to(ref.current.material.uniforms.uSpikes, {
            value: 1.5,
            duration: 2,
            overwrite: true
        })
        gsap.to(tilt, {
            x: 0,
            y: 0,
            duration: 0.4,
            overwrite: true
        })
        gsap.to(ref.current.material.uniforms.uMouseRadius, {
            value: 0.0,
            duration: 0.2,
            overwrite: true
        })
    }

    return (<mesh ref={ref}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        {...props}
        >
        <planeBufferGeometry 
        args={
            [PLANE_SIZE, PLANE_SIZE]
        }
        /> 
        <shaderMaterial uniforms={
                {
                    uColor: {
                        value: new THREE.Color("lightskyblue")
                    },
                    uPlaneSize: {
                        value: new THREE.Vector2(PLANE_SIZE, PLANE_SIZE)
                    },
                    uImageSize: {
                        value: new THREE.Vector2(img.width, img.height)
                    },
                    uMousePos: {
                        value: new THREE.Vector2(0.0, 0.0)
                    },
                    uTime: {
                        value: 0.0
                    },
                    uRadius: {
                        value: 0.5
                    },
                    uTexture: {
                        value: tex
                    },
                    uSpikes: {
                        value: 2
                    }
                }
            }
            vertexShader={vertexShader}
            fragmentShader={fragmentShader}
            side={
                THREE.DoubleSide
            }/>
    </mesh>)
};
