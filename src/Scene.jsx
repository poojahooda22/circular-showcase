
import { OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from 'three';


    
const Scene = () => {
    let text = useTexture("./image.png");
    text.needsUpdate = true;

    return (
        <mesh>
            <cylinderGeometry args={[1, 1, 1, 30, 30, true]} />
            <meshBasicMaterial map={tex} side={THREE.DoubleSide} />
        </mesh>
    )
}

export default Scene