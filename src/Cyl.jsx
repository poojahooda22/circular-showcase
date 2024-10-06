
import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';


    
const Cyl = () => {
    let tex = useTexture("./img4.png");
    let cyl = useRef(null);
    useFrame((state, delta) => {
        cyl.current.rotation.y += delta;
    })

    return (
        <mesh ref={cyl} rotation={[0, 0.2, 0.2]}>
            <cylinderGeometry args={[1, 1, 1, 60, 60, true]} />
            <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} />
        </mesh>
    )
}

export default Cyl