import React, { useRef , useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { Grid } from '@mui/material'
import { Loop } from '@mui/icons-material'
import { AnimationActionLoopStyles } from 'three'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('../dog1.glb')
  const { actions } = useAnimations(animations, group)


  
  const handleClick = () =>{
    
    actions.Congratulate.play().reset().setLoop(true,1);
    actions.Show.stop();
    // actions.Idle.play();
    navigator.vibrate([10,1700,100]);
  
}




  useEffect(() => {
     console.log(actions);

     actions.Show.play().setLoop(true,1);
     actions.Idle.play().reset();


     
       return() =>{
        actions.Idle.reset().stop();
       }
    //  actions.Show.play();

    //  actions.Show.setLoop(true,1);

        
  },[]);




  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene" onClick={handleClick}>
        <group name="skeleton_#0_2">
          <primitive object={nodes.Root} />
          <skinnedMesh name="Rover" geometry={nodes.Rover.geometry} material={materials.Material_0} skeleton={nodes.Rover.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('../dog1.glb')
