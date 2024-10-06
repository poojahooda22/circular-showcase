import { Canvas } from '@react-three/fiber'
import './App.css'
import { OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from 'three';


function App() {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight />
    </Canvas>
  )
}

export default App
