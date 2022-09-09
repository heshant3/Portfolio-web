import React, { useRef , useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { Grid } from '@mui/material'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('../plane.glb')
  const { actions } = useAnimations(animations, group)



  useEffect(() => {
    console.log(actions);
    actions.Flying.play();
         
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Armature" position={[-10, -10, -10]  }  >
      <group name="Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="4f6fd1d7075f4d4e82dbd58f2c6d648cfbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="group1"
                  position={[17.03, -1.1, 11.95]}
                  rotation={[-0.05, 0, 0]}
                >
                  <group
                    name="polySurface56"
                    position={[-6.48, 1.06, -3.96]}
                    rotation={[1.41, 0, 0]}
                  >
                    <mesh
                      name="polySurface56_lambert7_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface56_lambert7_0.geometry}
                      material={materials["lambert7.001"]}
                    />
                  </group>
                  <group
                    name="polySurface65"
                    position={[-6.48, 1.06, 3.96]}
                    rotation={[1.41, 0, 0]}
                  >
                    <mesh
                      name="polySurface65_lambert7_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface65_lambert7_0.geometry}
                      material={materials["lambert7.001"]}
                    />
                  </group>
                  <group name="polySurface69">
                    <mesh
                      name="polySurface69_lambert7_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface69_lambert7_0.geometry}
                      material={materials["lambert7.001"]}
                      position={[0, -0.08, -1.56]}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>


      </group>
    </group>
  )
}

useGLTF.preload('../plane.glb')
