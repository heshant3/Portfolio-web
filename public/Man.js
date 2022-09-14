/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/man.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={10}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh name="Boy01_Body_Geo" geometry={nodes.Boy01_Body_Geo.geometry} material={materials.Boy01_Body_MAT1} skeleton={nodes.Boy01_Body_Geo.skeleton} />
          <skinnedMesh name="Boy01_Brows_Geo" geometry={nodes.Boy01_Brows_Geo.geometry} material={materials.Boy01_Brows_MAT2} skeleton={nodes.Boy01_Brows_Geo.skeleton} />
          <skinnedMesh name="Boy01_Eyes_Geo" geometry={nodes.Boy01_Eyes_Geo.geometry} material={materials.Boy01_Eyes_MAT2} skeleton={nodes.Boy01_Eyes_Geo.skeleton} />
          <skinnedMesh name="h_Geo" geometry={nodes.h_Geo.geometry} material={materials.Boy01_Mouth_MAT2} skeleton={nodes.h_Geo.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/man.glb')