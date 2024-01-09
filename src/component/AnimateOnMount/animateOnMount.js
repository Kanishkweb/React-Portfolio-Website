import React, { useEffect, useState, useRef } from "react";

const useAnimateOnMount = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowAnimation(true);
          } else {
            setShowAnimation(false); // Reset animation when not intersecting
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []); // Empty dependency array for observer creation

  return { showAnimation, sectionRef };
};

export default useAnimateOnMount;
