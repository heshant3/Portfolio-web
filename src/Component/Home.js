//import React from "react";
import React , {Suspense , useEffect} from "react";
import { NavLink } from "react-router-dom";
import '../Css/HomeAbout.css';
import Lottie from "react-lottie";
import animationData from "../lotties/parachute-2";
import { gsap , Power3} from 'gsap';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera,ContactShadows } from "@react-three/drei";
import Kick from "../Plane.js";
import { CameraHelper } from "three";
import Img from '../Image/img.png'



  export default function Home(){

  
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
        },
      };

      useEffect(() => {

 
        gsap.from('.mainbody', { y:15, opacity:0, ease: Power3.easeOut, delay:0.8 });

        // gsap.to('.iteambox h1', { opacity:1, duration: 2.5, ease: "power4.out", y: 30 }, );
        

      }, [])


    
    return(
        <div >
         
         <div className="mainbody">

          <div className="bodybox">
            <div className="iteambox">
             
              <h1>Hi There, <br/>  <spam> I'm</spam>  <span>Ui/Ux</span> <span>Engineer</span> 
              <br/> <p>A Creative Designer from SriLanka</p>
              </h1>
            </div>
            <div className="iteambox">
             
            {/* camera={{ position: [10, -800, 120]  */}
              
            <Canvas camera={{ position: [-5, 0, -15], fov: 10 }}>
            <ambientLight intensity={1} />
              <directionalLight intensity={1.5} />
      <Suspense fallback={null}>
        <group rotation={[0, Math.PI, 0]} position={[0, -0.5, 0]}>
          <Kick />
        </group>
      </Suspense>
      <ContactShadows position={[0, -0.57, 0]} scale={20} blur={2} far={4.5} />
      <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.2} maxPolarAngle={Math.PI / 2.2} />
    </Canvas>
   
     
         
            </div>
          </div>


         </div>



     
        </div>
    )

}

