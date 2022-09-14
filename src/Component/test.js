//import React from "react";
import React , {Suspense} from "react";
import { NavLink } from "react-router-dom";
import '../Css/HomeAbout.css';
import Lottie from "react-lottie";
import animationData from "../lotties/parachute-2";
import { gsap} from 'gsap';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Kick from "../Plane.js";
import { CameraHelper } from "three";



  export default function Home(){


    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        },
      };

    //   useEffect(() => {
    //     // gsap.to('.contentBox', { duration: 2.5, ease: "slow(0.7, 0.7, false)", y: 190 });

    //     gsap.to('.contentBox p', { opacity:1, duration: 2.5, ease: "power4.out", y: 30 }, );
        

    //   }, [])


    
    return(
        <div >

          <div className="box">
          <Canvas  camera={{ position: [5, -60, 395] , fov:3 }}>
              <OrbitControls minPolarAngle={Math.PI / 2.1} maxPolarAngle={Math.PI / 2.1} enableZoom={false} enablePan={false} />
              <ambientLight intensity={1} />
              <directionalLight intensity={0.5} />
              <Suspense fallback={null}>
                {/* Y , X */}
             <Kick position={[-6.7, 11, 0]}  />   
              </Suspense>
           
          </Canvas>
   
         </div>


     

          <div className="nameText1">
          <p className="text1" >Heshan</p>
          <p className="text2"> Tharindu</p>
          <p className="text3" > UI/UX Engineer | 3D Artist from SriLanka</p>
          </div>





        
        <div className="lottie">
        <Lottie 
	    options={defaultOptions}
      />
        </div>

        </div>
    )

}

