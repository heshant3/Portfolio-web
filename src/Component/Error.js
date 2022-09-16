import React , {useEffect} from "react";
import Lottie from "react-lottie";
import animationData from "../lotties/404error";
import '../Css/ErrorStyle.css';
import { gsap , Power3} from "gsap";


export default function App() {

  useEffect(() => {
    gsap.from('.Appp', { y:15, opacity:0, ease: Power3.easeOut, delay:0.8 });


  }, [])



  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      // preserveAspectRatio: "xMidYMid slice"
    },
  };

  return (
    <div className="Appp">
     
      <Lottie options={defaultOptions} height={300} width={300} isClickToPauseDisabled={true} />
    </div>
  );
}