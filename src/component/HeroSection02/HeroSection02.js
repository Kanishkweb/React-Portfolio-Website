import React from "react";
import "./HeroSection02.css";

const HeroSection02 = () => {
  return (
    <div className="main02" id="section2">
      <div className="left02">
        <h1>EXPERINCE</h1>
        <img alt="exprinceimg" src="Images/experince.jpg" />
        <div className="bottomtext">
          <div className="no">01</div>
          <div className="bottomtextgrp">
            <div>CODECANVAS</div>
            <div>2021,commercial web development</div>
          </div>
        </div>
      </div>

      <div className="right02">
        <img alt="microsoft" src="Images/microsoft.jpg" />
        <div className="bottomtext">
            <div className="no">02</div>
          <div className="bottomtextgrp">
            <div>MICROSOFT</div>
            <div>2022,Intern at Frontend Role</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection02;
