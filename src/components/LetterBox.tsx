import React, { useState, useEffect } from "react";

interface LetterBoxProps {
  targetLetter: string;
  currentLetter: string;
  rowState: string;
  targetWord: string;
  needsReset: number;
}

const LetterBox: React.FC<LetterBoxProps> = ({
  targetLetter,
  currentLetter,
  rowState,
  targetWord,
  needsReset,
}) => {
  const [letter, setLetter] = useState(currentLetter);
  const [backgroundColor, setBackgroundColor] = useState("#ccc");

  useEffect(() => {
    setLetter(currentLetter);
    if (rowState === "disabled") {
      if (currentLetter === "") {
        setBackgroundColor("#ccc");
      } else if (currentLetter === targetLetter) {
        setBackgroundColor("green");
      } else if (targetWord.includes(currentLetter)) {
        setBackgroundColor("yellow");
      }
    }
  }, [rowState, currentLetter, targetLetter]);

  useEffect(() => {
    if (needsReset) {
      setLetter("");
      setBackgroundColor("#ccc");
    }
  }, [needsReset]);

  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: backgroundColor,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "24px",
        fontWeight: "bold",
        margin: "2px",
        marginBottom: "20px",
      }}
    >
      <input
        type="text"
        value={letter}
        maxLength={1}
        style={{
          width: "60%",
          height: "60%",
          fontSize: "2.5rem",
          textAlign: "center",
          backgroundColor: "transparent",
          border: "none",
          color: "black",
          outline: "none",
        }}
        readOnly
      />
    </div>
  );
};

export default LetterBox;
