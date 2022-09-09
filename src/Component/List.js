import React from "react";
import { NavLink } from "react-router-dom";
import '../Css/ListStyle.css';


const List=()=>{
    return(
        <>
       <header>
        <div className="container container-flex ">
            
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

export default List;