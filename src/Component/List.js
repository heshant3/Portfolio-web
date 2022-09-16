import React , {useEffect} from "react";
import { NavLink } from "react-router-dom";
import '../Css/ListStyle.css';
import { gsap , Power3} from "gsap";

export default function List(){


    useEffect(() => {
        gsap.from('.list', { y:15, opacity:0, ease: Power3.easeOut, delay:0.8 });


      }, [])

    const handleClick = () =>{
        navigator.vibrate([50]);
      
    }



    return(
        <>
       <header>
        <div className="toop">
            
        <nav>  
            <div className="list">
                
                <NavLink onClick={handleClick} exact to="/" className="listItem" activeClassName="activeItem">Home </NavLink>
                <NavLink onClick={handleClick} to="/works" className="listItem" activeClassName="activeItem">Works </NavLink>
                <NavLink onClick={handleClick} to="/about" className="listItem" activeClassName="activeItem">About </NavLink>
                
            </div>
        </nav>

        </div>
        </header>
        </>
    )
}

