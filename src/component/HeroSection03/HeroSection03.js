import React from "react";
import "./HeroSection03.css";
import useAnimateOnMount from "../AnimateOnMount/animateOnMount";

const HeroSection03 = () => {
  const { sectionRef, showAnimation } = useAnimateOnMount();
  return (
    <div className="main" id="section3" ref={sectionRef}>
      <div className={`left03 ${showAnimation ? "animated" : ""}`}>
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
      <div className={`right03  ${showAnimation ? "animated" : ""}`}>
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
