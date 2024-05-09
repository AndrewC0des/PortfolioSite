import React, { useState, ChangeEvent, useEffect } from "react";
import LetterBox from "./LetterBox";
import LetterRow from "./LetterRow";
import MovingButton from "./MovingButton";

interface LetterGameProps {
  targetWord: string;
}

const LetterGame: React.FC<LetterGameProps> = ({ targetWord }) => {
  const [curGuess, setCurGuess] = useState("");
  const [activeRow, setActiveRow] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [reset, setReset] = useState(0);

  const resetGame = () => {
    setCurGuess("");
    setActiveRow(0);
    setGameOver(false);
    setReset((prevReset) => prevReset + 1);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const inputLetter = event.key.toUpperCase();
      if (/^[a-zA-Z]$/.test(inputLetter)) {
        if (curGuess.length === targetWord.length) return;
        setCurGuess((prevCurGuess) => prevCurGuess + inputLetter);
      } else if (event.key === "Backspace") {
        setCurGuess((prevCurGuess) => prevCurGuess.slice(0, -1));
      } else if (
        event.key == "Enter" &&
        curGuess.length === targetWord.length
      ) {
        if (curGuess === targetWord) {
          setActiveRow(-1);
          setGameOver(true);
        } else {
          setActiveRow((prevActiveRow) => prevActiveRow + 1); // Switch to the next row
          setCurGuess(""); // Reset current guess for the next row

          if (activeRow === 4) {
            setGameOver(true);
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [curGuess, targetWord]);
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h1 style={{ marginRight: "20px" }}>Word Game!</h1>
        {gameOver ? (
          <button onClick={resetGame}> Press to play again</button>
        ) : null}
      </div>
      <div>
        {[0, 1, 2, 3, 4].map((index) => (
          <LetterRow
            key={index}
            targetWord={targetWord}
            currentGuess={curGuess}
            rowState={index === activeRow ? "enabled" : "disabled"}
            needsReset={reset}
          />
        ))}
      </div>
      <div>
        {gameOver ? (
          <MovingButton text="Push this button to go with different candidate" />
        ) : (
          <h2>
            {curGuess.length === targetWord.length
              ? "Press Enter to submit your guess"
              : "Start typing to try and guess word"}
          </h2>
        )}
      </div>
    </div>
  );
};

export default LetterGame;
