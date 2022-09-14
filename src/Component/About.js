import React , {useEffect} from "react";
import '../Css/AboutStyle.css';
import Img from '../Image/img.png'
import { IconContext } from "react-icons";
import { FaBehanceSquare , FaGithub,  FaLinkedin} from 'react-icons/fa';
import { gsap } from 'gsap';
import Img1 from '../Image/About-1.png'
import Img2 from '../Image/About-2.png'
import Img3 from '../Image/About-3.png'
import Img4 from '../Image/About-4.png'
import Img5 from '../Image/About-5.png'




export default function About(){

      useEffect(() => {
        // gsap.to('.contentBox', { duration: 2.5, ease: "slow(0.7, 0.7, false)", y: 190 });

        // gsap.to('.mainAbout', { opacity:1, duration: 2.5, ease: "power4.out", y: 30 }, );
  

      }, [])


      const handleClick = () =>{
          navigator.vibrate([100]);
        
      }

    return(
        <div className="mainAbout"> 

        {/* ////////////  About    /////////////////// */}
            <div className="img">
            <img src={Img} alt="my face image"/>
            </div>
            <h2>Hello there , <br/> I'm Heshan Tharindu</h2>
            <div className="lineSP"></div>
            <p>I am undergraduate from Information and Communication Technology in Rajarata University of Sri Lanka.i have over 3 Years of experience in UI Engineering. <br/>  <br/> 
            I am interested in Ui\Ux developer. Learning new things in information technology is my main goal and I achieve it with hard work.</p>
            
        {/* ////////////  Working Experience    /////////////////// */}
                    
            <div className="exp">
            <h2>Working Experience</h2>

            <h3>Fiverr - <span>3D Modeling and Ui Designer / 2017 - Present</span> </h3>

            <h3>Upwork - <span>3D Modeling and Ui Designer / 2017 - Present</span> </h3>

            <h3>PeoplePerhour - <span>3D Modeling and Ui Designer / 2020 - Present</span> </h3>

            <h3>Like Mart - <span>Founder / Embedded System Developer 2017 - Present</span> </h3>
            </div>

        {/* ////////////  Achievements    /////////////////// */}

            <div className="achiev">
            <h1>Achievements</h1>

            <div className="grid">
            <figure class="effect-lily">
						<img src={Img1} alt=" Achievements-1"/>
						<figcaption>
							<div>
								<h2>Honor Award</h2>
								<p>Honor of Invention 3rd International Young Inventors Award Innovation Competition - 2016</p>
							</div>
						</figcaption>			
					</figure>
          <figure class="effect-lily">
          <img src={Img2} alt=" Achievements-2"/>
						<figcaption>
							<div>
								<h2>Grand Winner</h2>
								<p>"Innova minds" Innovation competition - 2016</p>
							</div>
						</figcaption>			
					</figure>

          <figure class="effect-lily">
          <img src={Img3} alt=" Achievements-3"/>
						<figcaption>
							<div>
								<h2>Gold Medal </h2>
								<p>ALL Island School innovation Competition - 2015</p>
							</div>
						</figcaption>			
					</figure>

          <figure class="effect-lily">
          <img src={Img4} alt=" Achievements-4"/>
						<figcaption>
							<div>
								<h2>Silver Medal </h2>
								<p>ALL Island School innovation Competition - 2017</p>
							</div>
						</figcaption>			
					</figure>

          <figure class="effect-lily">
          <img src={Img5} alt=" Achievements-6"/>
						<figcaption>
							<div>
								<h2>Participation</h2>
								<p>"Sahasak Nimawum" innovation Competition - 2017</p>
							</div>
						</figcaption>			
					</figure>
            </div>

            {/* <h3>Honor of Invention 3rd International Young Inventors Award Innovation Competition.</h3>
            <p>Honor of Invention 3rd International Young Inventors Award Innovation Competition.</p> */}

        {/* ////////////  Bottom Area    /////////////////// */}

            </div>


            <div className="bot">

            <a href="Heshan-CV.pdf" download="Heshan-CV.pdf">
            <button onClick={handleClick} >Download CV</button>
            </a>
             
            <div className="fon">
            <IconContext.Provider value={{ className: "global-class-name" }}>
            <a onClick={handleClick} href="https://github.com/heshant3" > < FaGithub /> </a>
            <a onClick={handleClick} href="https://www.behance.net/heshantharindu" > <FaBehanceSquare  /> </a>
            <a onClick={handleClick} href="https://www.linkedin.com/in/heshant3/" > <FaLinkedin /> </a>
            </IconContext.Provider>
           </div>


           <a href="mailto:hello@heshan.dev" className="email"> hello@heshan.dev</a>
           
           <div className="botto">
           <p>© 2022 heshan tharindu</p>
          </div>

          </div>
           


        </div>
    )
}
