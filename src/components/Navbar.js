import React from "react";
import {Link} from "react-router-dom";
import "./NavbarStyles.css"

function Navbar(){
    return(
        <div className="nav">
            <ul className="list">
                <li><Link to='/Home'>Home</Link></li>
                <li><Link to='/About'>About</Link></li>
                <li><Link to='/Skills'>Skills</Link></li>



            </ul>
        </div>
    );
}

export default Navbar;