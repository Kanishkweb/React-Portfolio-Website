import React from "react";
import "./HeroSection04.css";
import useAnimateOnMount from "../AnimateOnMount/animateOnMount";

const HeroSection04 = () => {
  const {showAnimation,sectionRef} = useAnimateOnMount()
  return (
    <div className="main04" id="section4" ref={sectionRef}>
      <div className={`left04 ${showAnimation ? "animated" : ""}`}>
        <h1>
          GET IN
          <br />
          TOUCH
        </h1>
        <div className="leftbottom04">
          <div className="lbh1">
            <h3>EMAIL</h3>
            <p>Kanishkshakya1@gmail.com</p>
          </div>
          <div className="lbh2">
            <h3>SOCIAL MEDIA</h3>
            <p>
              Connect with me on social media for updates and collaborations:
            </p>
            <ul className="social-links">
              <li>
                <a
                  href="https://www.instagram.com/KANISHK_SHAKYA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/kanishk-shakya-a5a449217/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Kanishkweb/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i> GitHub
                </a>
              </li>
              {/* Add more social media links as needed */}
            </ul>
          </div>
        </div>
      </div>
      <div className={`right04 ${showAnimation ? "animated" : ""}`}>
        <img alt="Get in touch" src="Images/getintouch.jpg" />
      </div>
    </div>
  );
};

export default HeroSection04;
