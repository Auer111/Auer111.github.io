import React, { useState, useEffect } from "react";
import "./BobbingWords.css"; // Import the CSS for animations

const BobbingWords = ({ words }) => {
  const [visibleWord, setVisibleWord] = useState("");
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const changeWord = () => {
      setIsFadingOut(true); // Start fading out
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * words.length);
        setVisibleWord(words[randomIndex]); // Change the word after fading out
        setIsFadingOut(false); // Start fading in
      }, 800); // Wait for 1 second to fade out
    };

    const intervalId = setInterval(() => {
      changeWord();
    }, 2000);

    changeWord(); // Set initial word

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [words]);

  return (
    <div className="bobbing-container">
      <span className={`bobbing-word ${isFadingOut ? "fade-out" : "fade-in"}`}>
        {visibleWord}
      </span>
    </div>
  );
};

export default BobbingWords;
