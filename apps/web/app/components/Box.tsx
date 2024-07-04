'use client'

import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Box(props) {
	const meshRef = useRef()

	const [hovered, setHover] = useState(false)
	const [active, setActive] = useState(false)

	useFrame((_state, delta) => {
		if (meshRef.current) {
			meshRef.current.rotation.x += delta
		}
	})

	return (
		<mesh
			{...props}
			ref={meshRef}
			scale={active ? 1.5 : 1}
			onClick={() => setActive(!active)}
			onPointerOver={() => setHover(true)}
			onPointerOut={() => setHover(false)}
		>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
		</mesh>
	)
}
