import React, { useEffect, useState } from "react";
import "./AnimatedText.css";

const AnimatedText = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let index = 0;
    let interval;

    const updateText = () => {
      if (isDeleting) {
        if (index >= 0) {
          setDisplayText(text.substring(0, index--));
        } else {
          setIsDeleting(false);
          index = 0;
        }
      } else {
        if (index <= text.length) {
          setDisplayText(text.substring(0, index++));
        } else {
          setTimeout(() => setIsDeleting(true), 1000); // Delay before deleting
        }
      }
    };

    interval = setInterval(updateText, 100); // Adjust speed here

    return () => clearInterval(interval);
  }, [isDeleting, text]);

  return <div className=" conatiner animated-text">{displayText}</div>;
};

export default AnimatedText;
