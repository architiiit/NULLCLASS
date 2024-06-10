import React from "react";
import "./Navbar.css";
import logo from "./logo.ico";
import SearchBar from "./SearchBar/SearchBar";
function Navbar() {
  return (
    <div className='Container_Navbar'>
      <div className="Burger_Logo_Navbar">
      <div className="burger">
        <p>gu</p>
        <p></p>
        <p></p>
      </div>
        <div className="logo_div_Navbar">
            <img src={logo} alt="" />
            <p className="logo_title_navbar">YouTube</p>
        </div>


      </div>
        <SearchBar/>
    </div>
  )
}

export default Navbar
