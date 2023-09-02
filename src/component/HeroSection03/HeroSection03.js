import React from "react";
import "./HeroSection03.css";

const HeroSection03 = () => {
  return (
    <div className="main" id="section3">
      <div className="left03">
        <img alt="skills1" src="Images/skills.jpg" />
        <h1>EDUCATION</h1>
        <p>
          <h2>
            <b>AMITY UNIVERSITY</b>
          </h2>
          Graduated from AmityUniversity <b>(BCA Program)</b>
        </p>
        <p>
          <h2>
            <b>--Certification--</b>{" "}
          </h2>
          <b>Full Stack Web Development form PW Skills</b>
        </p>
      </div>
      <div className="right03">
        <h1>SKILLS</h1>

        <ul>
          <li>HTML/CSS Proficiency</li>
          <li>JavaScript</li>
          <li>React JS</li>
          <li>MongoDB</li>
          <li>Express JS</li>
        </ul>
        <img alt="skills2jpg" src="Images/skills2.jpg" />
      </div>
    </div>
  );
};

export default HeroSection03;
