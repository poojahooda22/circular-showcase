import { Canvas } from '@react-three/fiber'
import './App.css'
import { OrbitControls } from '@react-three/drei';
import Cyl from './Cyl';
import { Bloom, EffectComposer } from '@react-three/postprocessing';

function App() {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight />
      <Cyl/>
      <EffectComposer>
        <Bloom
        intensity={1.0} // The bloom intensity.
        luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
        luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]
        mipmapBlur
      />
      </EffectComposer>
    </Canvas>
  )
}

export default App
