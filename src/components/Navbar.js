import React, { useEffect, useState } from "react";
import logo from "../assets/logo1.png";
import { useNavigate } from "react-router-dom";

import "../styles/Navbar.css";

export function Navbar() {

  const navigate = useNavigate()
 
  
  return (
    < nav className="navbar">
      <div className="leftSide">
        <img
          src={logo}
          alt=".."
          style={{ width: "100px", height: "100px" }}
        />
        
      </div>
      <ul className="rightSide">
       <li onClick={()=>navigate('/')}> Home</li>
       <li onClick={()=>navigate('/menu')}> Menu</li>
       <li onClick={()=>navigate('/about')}> About</li>
       <li onClick={()=>navigate('/contact')}> Contact</li>
       
        
       
        
       
      </ul>
    </nav>
  );
}
