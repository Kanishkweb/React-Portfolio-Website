import "./Herosection.css";
import useAnimateOnMount from "../AnimateOnMount/animateOnMount";
import { useEffect, useRef, useState } from "react";

const HeroSection01 = () => {
  const { showAnimation, sectionRef } = useAnimateOnMount();
  const [words, setWords] = useState([]);
  
  const paragraphText =
    " I have been a professional web developer. I have created a large scale of web application and Love to do creative things.";

  useEffect(() => {
    const paragraphWords = paragraphText.split(" ");
    let index = 0;
    
    const timer = setInterval(() => {
      if (index < paragraphWords.length) {
        setWords(prevWords => [...prevWords, paragraphWords[index]]);
        index++;
      } else {
        clearInterval(timer);
      }
    }, 500); // Adjust the delay as needed

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="main" id="section1" ref={sectionRef}>
      <div className={`left01 ${showAnimation ? "animated" : ""}`}>
        <h1 className="heading01">
          WEB
          <br />
          DEVELOPER
        </h1>
        <div className="web1">
          <img alt="Developerimg" src="/Images/web1.jpg" />
        </div>
      </div>
      <div className={`right01 ${showAnimation ? "animated" : ""}`}>
        <h1 className={`mernStack ${showAnimation ? "animated" : ""}`}>
          {" "}
          MERN STACK <br />
          DEVELOPER
        </h1>
        <p className={`description ${showAnimation ? "animated" : ""}`}>
          {words.map((word, index) => (
            <span key={index}>{word} </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default HeroSection01;
