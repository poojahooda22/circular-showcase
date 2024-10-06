
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';


    
const Cyl = () => {
    let tex = useTexture("./img4.png");
    

    return (
        <mesh>
            <cylinderGeometry args={[1, 1, 1, 30, 30, true]} />
            <meshStandardMaterial map={tex} side={THREE.DoubleSide} />
        </mesh>
    )
}

export default Cyl