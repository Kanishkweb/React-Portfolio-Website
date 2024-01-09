import React, { useEffect, useState } from "react";
import "./Resume.css";
import useAnimateOnMount from "../AnimateOnMount/animateOnMount";

const Resume = () => {
  const { showAnimation, sectionRef } = useAnimateOnMount();
  const [text, setText] = useState("DOWNLOAD RESUME FROM HERE...");

  useEffect(() => {
    const toggleText = () => {
      setText((prevText) =>
        prevText === "DOWNLOAD RESUME FROM HERE..."
          ? "ACCESS THE GIT ACCOUNT FROM HERE......"
          : "DOWNLOAD RESUME FROM HERE..."
      );
    };

    const interval = setInterval(toggleText, 3000); // Change text every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []); // Run once on mount
  return (
    <div className="mainrs" ref={sectionRef}>
      <div className={`leftrs ${showAnimation ? "animated" : ""}`}>
        <h1>
          <span className="animated-text">{text}</span>
        </h1>
        <a
          href="https://github.com/Kanishkweb/"
          className="resume-button github-button"
        >
          GitHub
        </a>
        <a
          href="https://drive.google.com/u/0/uc?id=1r_XhZfXb3eLRVeEV-z17NEADrrGzU7Xn&export=download"
          className="resume-button download-button"
        >
          DOWNLOAD NOW
        </a>
      </div>
      <div className={`rightrs ${showAnimation ? "animated" : ""}`}>
        <div className="resume-image">
          <img alt="resume" src="Images/cv.png" />
        </div>
      </div>
    </div>
  );
};

export default Resume;
