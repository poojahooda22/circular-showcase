import { Canvas } from '@react-three/fiber'
import './App.css'
import { OrbitControls } from '@react-three/drei';
import Cyl from './Cyl';

function App() {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight />
      <Cyl/>
    </Canvas>
  )
}

export default App
