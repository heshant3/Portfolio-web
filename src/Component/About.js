import React , {useEffect} from "react";
import '../Css/AboutStyle.css';
import Img from '../Image/img.png'
import { IconContext } from "react-icons";
import { FaBehanceSquare , FaGithub,  FaLinkedin} from 'react-icons/fa';
import { gsap } from 'gsap';




export default function About(){

      useEffect(() => {
        // gsap.to('.contentBox', { duration: 2.5, ease: "slow(0.7, 0.7, false)", y: 190 });

        // gsap.to('.mainAbout', { opacity:1, duration: 2.5, ease: "power4.out", y: 30 }, );
  

      }, [])

    return(
        <div className="mainAbout"> 


            <div className="img">
            <img src={Img} alt="my face image"/>
            </div>
            <h2>Hello there , <br/> i'm Heshan Tharindu</h2>
            <div className="lineSP"></div>
            <p>I am undergraduate from Information and Communication Technology in Rajarata University of Sri Lanka.i have over 5 Years of experience in UI Engineering. <br/>  <br/> 
            I am interested in Ui\Ux developer. Learning new things in information technology is my main goal and I achieve it with hard work.</p>



            <a href="Heshan-CV.pdf" download="Heshan-CV.pdf">
            <button>Download CV</button>
            </a>


            <div className="fon">
            <IconContext.Provider value={{ className: "global-class-name" }}>
            <a href="https://github.com/heshant3" > < FaGithub /> </a>
            <a href="https://www.behance.net/heshantharindu" > <FaBehanceSquare  /> </a>
            <a href="https://www.linkedin.com/in/heshant3/" > <FaLinkedin /> </a>
            </IconContext.Provider>
           </div>


           <a href="mailto:hello@heshan.dev" className="email"> hello@heshan.dev</a>
           
           <div className="botto">
           <p>© 2022 heshan tharindu</p>
          </div>
           


        </div>
    )
}
