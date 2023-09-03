

import React from "react";
import "./ScrollNavigation.css"; // Create a separate CSS file for styling

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

function ScrollNavigation() {
  return (
    <nav className="scroll-nav">
      <ul>
        <li>
          <button onClick={() => scrollToSection("section1")}>Home</button>
        </li>
        <li>
          <button onClick={() => scrollToSection("section5")}>Resume</button>
        </li>
        {/* <li>
          <button onClick={() => scrollToSection("section2")}>Experince</button>
        </li> */}
        <li>
          <button onClick={() => scrollToSection("section3")}>Skills</button>
        </li>
        <li>
          <button onClick={() => scrollToSection("section4")}>Contact US</button>
        </li>
      </ul>
    </nav>
  );
}

export default ScrollNavigation;
