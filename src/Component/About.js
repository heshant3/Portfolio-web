import React , {useEffect} from "react";
import '../Css/AboutStyle.css';
import Img from '../Image/img.png'
import { IconContext } from "react-icons";
import { FaBehanceSquare , FaGithub,  FaLinkedin} from 'react-icons/fa';
import Img1 from '../Image/About-1.png'
import Img2 from '../Image/About-2.png'
import Img3 from '../Image/About-3.png'
import Img4 from '../Image/About-4.png'
import Img5 from '../Image/About-5.png'
import { gsap , Power3} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);





export default function About(){
      

  
    
      useEffect(() => {
        gsap.from('.About_1', { y:15, opacity:0, ease: Power3.easeOut, delay:0.8 });

        // gsap.to('.mainAbout', { opacity:1, duration: 2.5, ease: "power4.out", y: 30 }, );

        const exp = gsap.timeline({
          // yes, we can add it to an entire timeline!
          scrollTrigger: {
            trigger: ".exp",
            
            start:'5% 100% ',
            end: () => "+=" + exp.offsetWidth,
            
            scrub:1
          }
         
        })
        exp.from('.exp', {  y:15, opacity:0, ease: Power3.easeOut, delay:0.8   }, );
    

        const ach = gsap.timeline({
          // yes, we can add it to an entire timeline!
          scrollTrigger: {
            trigger: ".achiev h1",
  
            start:'5% 100% ',
            end: () => "+=" + exp.offsetWidth,
            scrub:1
          }
         
        })
        ach.from('.achiev h1', {  y:15, opacity:0, ease: Power3.easeOut, delay:0.8  }, );


        ScrollTrigger.batch(".effect-lily", {
          //   interval: 0.1, // time window (in seconds) for batching to occur. 
          //   batchMax: 4,   // maximum batch size (targets)
            onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: {each: 0.15, grid: [1, 1]}, overwrite: true}),
            onEnterBack: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.15, overwrite: true}),
            onLeaveBack: batch => gsap.set(batch, {opacity: 0, y: 100, overwrite: true})
            // you can also define things like start, end, etc.
          });
          
          ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".effect-lily", {y: 0}));



        const bb = gsap.timeline({
          // yes, we can add it to an entire timeline!
          scrollTrigger: {
            trigger: ".bot",
            // markers: {startColor: "green", endColor: "red", fontSize: "12px"},
            start:'5% 100% ',
            end: () => "+=" + exp.offsetWidth,
            scrub:1
          }
         
        })
        bb.from('.bot', {  y:15, opacity:0, ease: Power3.easeOut, delay:0.8   }, );



      }, [])


      const handleClick = () =>{
          navigator.vibrate([100]);
        
      }

    return(
        <div className="mainAbout"> 

        {/* ////////////  About    /////////////////// */}
        <div  className="About_1">
            <div className="img">
            <img src={Img} alt="my face image"/>
            </div>
            <h2>Hello there , <br/> I'm Heshan Tharindu</h2>
            <div className="lineSP"></div>
            <p>I am undergraduate from Information and Communication Technology in Rajarata University of Sri Lanka.i have over 3 Years of experience in UI Engineering. <br/>  <br/> 
            I am interested in Ui\Ux developer. Learning new things in information technology is my main goal and I achieve it with hard work.</p>
            </div>   
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
