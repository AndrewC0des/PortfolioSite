import React, { useState, useEffect } from "react";
import LetterBox from "./LetterBox";

interface LetterBoxProps {
  targetWord: string;
  currentGuess: string;
  rowState: string;
  needsReset: number;
}

const RowState = {
  DISABLED: "disabled",
  ENABLED: "enabled",
};

const LetterRow: React.FC<LetterBoxProps> = ({
  targetWord,
  currentGuess,
  rowState,
  needsReset,
}) => {
  const [word, setWord] = useState("");

  useEffect(() => {
    if (rowState === RowState.ENABLED) {
      setWord(currentGuess);
    }
  }, [currentGuess, rowState]);

  useEffect(() => {
    if (needsReset) {
      setWord("");
    }
  }, [needsReset]);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {targetWord.split("").map((targetletter, index) => (
        <LetterBox
          key={index}
          targetLetter={targetletter}
          currentLetter={word[index] || ""}
          rowState={rowState}
          targetWord={targetWord}
          needsReset={needsReset}
        />
      ))}
    </div>
  );
};

export default LetterRow;
