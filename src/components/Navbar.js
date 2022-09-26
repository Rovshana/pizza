import React, { useEffect, useState } from "react";
import logo from "../assets/logo1.png";
import { Link } from "react-router-dom";

import "../styles/Navbar.css";
import {useTranslation} from 'react-i18next'
import NavDropdown from 'react-bootstrap/NavDropdown';
import {BsGlobe} from 'react-icons/bs'
import Switch from '@mui/material/Switch';

export function Navbar({mode, setMode}) {

  const lngs = {
    az: { nativeName: "Az" },
  en: { nativeName: "En" },
  gr: { nativeName: "Gr" },
  }
  const { t, i18n } = useTranslation();
 
  
  return (
    <div className="navbar">
      <div className="leftSide">
        <img
          src={logo}
          alt=".."
          style={{ width: "100px", height: "100px" }}
        />
        
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        {/* <div className="btnDiv">
          {
            Object.keys(lngs).map((lng)=>(
              <button type='submit' key={lng} onClick={()=> i18n.changeLanguage(lng)} disabled={i18n.resolvedLanguage === lng}>{lngs[lng].nativeName}</button>
            ))
          }
        </div> */}
        {/* <div>
          {
            Object.keys(lngs).map((lng)=>(
              <DropdownButton
              as={ButtonGroup}
              key={lng}
              id={`dropdown-variants-${lng}`}
              onClick={()=> i18n.changeLanguage(lng)} disabled={i18n.resolvedLanguage === lng}
              
            >
              
              </DropdownButton> 
            ))
          }

        </div> */}
        
        <div>
        <NavDropdown
              id="nav-dropdown-dark-example"
              title={<BsGlobe style={{color: "white", width: "40px", height: "30px"}}/>}
              menuVariant="dark"
            >
              {Object.keys(lngs).map((lng)=>
              <NavDropdown.Item 
              key={lng}
              id={`dropdown-variants-${lng}`}
              onClick={()=> i18n.changeLanguage(lng)} 
              disabled={i18n.resolvedLanguage === lng} 
              >{lngs[lng].nativeName}</NavDropdown.Item>)}
              
            </NavDropdown>
        </div>
        
        <Switch   onChange={(e)=>setMode(mode === 'light' ? 'dark' : 'light')}defaultChecked />
        
      </div>
    </div>
  );
}
