import React , {useEffect}from "react";
import '../Css/WorksStyle.css';
import Img1 from '../Image/works-1.png'
import Img2 from '../Image/works-2.png'
import Img3 from '../Image/works-3.png'
import Img4 from '../Image/works-4.png'
import Img5 from '../Image/works-5.png'
import Img6 from '../Image/works-6.png'
import Img7 from '../Image/works-7.png'
import Img8 from '../Image/works-8.png'
import Img9 from '../Image/works-9.png'
import Img10 from '../Image/works-10.png'
import Img11 from '../Image/works-11.png'
import { IconContext } from "react-icons";
import { FaBehanceSquare , FaGithub,  FaLinkedin} from 'react-icons/fa';
import { gsap , Power3} from "gsap";
import {Helmet} from "react-helmet";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);






export default function App() {


    useEffect(() => {

        gsap.from('.topword', { y:15, opacity:0, ease: Power3.easeOut, delay: 0.15 });

        gsap.defaults({ease: "power3"});
        gsap.set(".item", {y: 100});
        
        ScrollTrigger.batch(".item", {
        //   interval: 0.1, // time window (in seconds) for batching to occur. 
        //   batchMax: 4,   // maximum batch size (targets)
          onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: {each: 0.15, grid: [1, 1]}, overwrite: true}),
          onEnterBack: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.15, overwrite: true}),
          onLeaveBack: batch => gsap.set(batch, {opacity: 0, y: 100, overwrite: true})
          // you can also define things like start, end, etc.
        });
        
        ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".item", {y: 0}));


        
        const exp = gsap.timeline({
            // yes, we can add it to an entire timeline!
            scrollTrigger: {
              trigger: ".botttxt",
             
              start: "center 100%",
              end: () => "+=" + exp.offsetWidth,
              
              scrub:1
            }
           
          })
          exp.from('.botttxt', { y:15, opacity:0, ease: Power3.easeOut, delay:0.8   }, );

    
    
      }, [])


    return(
        <div className="worksmain">

            <Helmet>
               
                <meta
                 name="description"
                 content="Ui/Ux Engineer Works page"
                />
                <meta
                 name="keywords"
                 content="Heshan Tharindu kalubowila, ui designer, Ui developer, Frond-end developer, uiux, Ui/Ux designer, Heshan, tharindu, kalubowila"
                />
            </Helmet>

       <div className="topword">

        <h1>RECENT <br/> WORK</h1>

        <p>Projects that I've worked on</p>
        </div>  


        <div className="boxContent">
        <div className="item noisy"> 
        
        <img src={Img1} alt="my face image"/>
        <h1>Smart AI Stethoscope Project</h1>

        <p>Develop of wireless stethoscope with mobile AI assistant application.</p>
        <h5>Technologies - Android, TensorFlow, Python, Arduino</h5>
        </div>

        <div className="item noisy"> 
        <img src={Img2} alt="my face image"/>
        <h1>MC Management System</h1>

        <p>Develop of java application to manage medical center.</p>
        <h5>Technologies - Java, MySQL</h5>
        </div>

        <div className="item noisy"> 
        <img src={Img3} alt="my face image"/>
        <h1>Bus Scheduling Web Project</h1>

        <p>Develop of website to provide bus schedules and reservation system.</p>
        <h5>Technologies - HTML, CSS, AJAX, PHP, JS, jQuery</h5>
        </div>

        <div className="item noisy"> 
        <img src={Img4} alt="my face image"/>
        <h1>Class Attended System</h1>

        <p>RFID attendance tracker and mobile app.</p>
        <h5>Technologies - Arduino, React, PHP, MySQL</h5>
        </div>

        <div className="item noisy"> 
        <img src={Img5} alt="my face image"/>
        <h1>Class Attended System</h1>

        <p>Fingerprint attendance tracker and mobile app.</p>
        <h5>Technologies - Arduino, PHP, JS, jQuery, MySQL </h5>
        </div>

        <div className="item noisy"> 
        <img src={Img6} alt="my face image"/>
        <h1>Mini Bank Management System</h1>

        <p>Develop of Mini bank management system.</p>
        <h5>Technologies - Arduino, VB, MySQL</h5>
        </div>

        <div className="item noisy"> 
        <img src={Img7} alt="my face image"/>
        <h1>Modern Alcohol Detector</h1>

        <p>Calculates the percentage of alcohol in drunken drivers.</p>
        <h5>Technologies - Arduino</h5>
        </div>

        <div className="item noisy"> 
        <img src={Img9} alt="my face image"/>
        <h1>Smart Plug (IOT Base)</h1>

        <p>Develop of IOT Smart Plug.</p>
        <h5>Technologies - Arduino, Android, MySQL</h5>
        </div>

        <div className="item noisy"> 
        <img src={Img8} alt="my face image"/>
        <h1>Water Quality Analyzer</h1>

        <p>Develop of water quality analyzer unit.</p>
        <h5>Technologies - Arduino, Android, MySQL</h5>
        </div>

        <div className="item noisy"> 
        <img src={Img10} alt="my face image"/>
        <h1>Water And Soap Dispenser </h1>

        <p>Fully Automatic Water And Soap Dispenser Unit.</p>
        <h5>Technologies - Arduino</h5>
        </div>

        <div className="item noisy"> 
        <img src={Img11} alt="my face image"/>
        <h1> Paint Filling Machine</h1>

        <p>Develop of Automatic Paint Filling Machine.</p>
        <h5>Technologies - Arduino</h5>
        </div>
   
        </div>

        <div className="botttxt" >
            <h2> More Works</h2>
            <IconContext.Provider value={{ className: "global-class-name" }}>
            <a href="https://github.com/heshant3" > < FaGithub /> </a>
            <a href="https://www.behance.net/heshantharindu" > <FaBehanceSquare  /> </a>
            </IconContext.Provider>
        </div>

        </div>
    )
}

