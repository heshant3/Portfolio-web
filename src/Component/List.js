import React from "react";
import { NavLink } from "react-router-dom";
import '../Css/ListStyle.css';


export default function List(){

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

