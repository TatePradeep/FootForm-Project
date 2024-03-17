import React from 'react'
import {useGLTF,useAnimations} from '@react-three/drei';

const Model = () => {
    const model=useGLTF('./Demo-Newheel4-v1.glb');
    console.log(model)
  return (
    <mesh >
      
 <primitive object={model.scene} position-y={'-4.15'} scale={0.35}/>   
  </mesh>
  )
}

export default Model
