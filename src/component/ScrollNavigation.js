import React, { useEffect, useRef } from "react";
import "./ScrollNavigation.css"; // Create a separate CSS file for styling

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

function ScrollNavigation() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const sectionRefs = {
    section1: useRef(null),
    section5: useRef(null),
    section3: useRef(null),
    section4: useRef(null),
  };

  // Function to handle intersection observer
  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // If the observed section is intersecting, trigger the animation
        entry.target.classList.add("animate"); // Apply animation class
      } else {
        // If it's not intersecting, remove animation class
        entry.target.classList.remove("animate");
      }
    });
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Trigger at 25% visibility
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    Object.values(sectionRefs).forEach((sectionRef) => {
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionRefs]);

  return (
    <nav className="scroll-nav">
      <ul>
        <li ref={sectionRefs.section1}>
          <button onClick={() => scrollToSection("section1")}>Home</button>
        </li>
        <li ref={sectionRefs.section5}>
          <button onClick={() => scrollToSection("section5")}>Resume</button>
        </li>
        <li ref={sectionRefs.section3}>
          <button onClick={() => scrollToSection("section3")}>Skills</button>
        </li>
        <li ref={sectionRefs.section4}>
          <button onClick={() => scrollToSection("section4")}>Contact</button>
        </li>
        {/* Add buttons with refs for other sections */}
      </ul>
    </nav>
  );
}

export default ScrollNavigation;
