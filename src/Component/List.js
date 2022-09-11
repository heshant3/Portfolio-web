import React from "react";
import { NavLink } from "react-router-dom";
import '../Css/ListStyle.css';


export default function List(){
    return(
        <>
       <header>
        <div className="toop">
            
        <nav>
            <div className="list">
                
                <NavLink exact to="/" className="listItem" activeClassName="activeItem">Home </NavLink>
                <NavLink to="/works" className="listItem" activeClassName="activeItem">Works </NavLink>
                <NavLink to="/about" className="listItem" activeClassName="activeItem">About </NavLink>
                
            </div>
        </nav>

        </div>
        </header>
        </>
    )
}

