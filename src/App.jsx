import { Canvas } from '@react-three/fiber'
import './App.css'


function App() {
  return (
    <Canvas>
      <mesh>
        <boxGeometry />
        <meshBasicMaterial />
      </mesh>
    </Canvas>
  )
}

export default App
