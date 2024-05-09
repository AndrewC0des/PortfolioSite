import React, { useState, MouseEvent } from "react";

interface MovingButtonProps {
  text: string;
}

const MovingButton: React.FC<MovingButtonProps> = ({ text }) => {
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = () => {
    if (buttonPosition.y == 100) {
      setButtonPosition({ x: buttonPosition.x, y: 0 });
    } else {
      setButtonPosition({
        x: buttonPosition.x,
        y: buttonPosition.y + 100,
      });
    }
  };

  return (
    <div onMouseMove={handleMouseMove} style={{ position: "relative" }}>
      <button
        style={{
          position: "absolute",
          top: buttonPosition.y,
          left: buttonPosition.x,
        }}
        onClick={handleMouseMove}
      >
        {text}
      </button>
    </div>
  );
};

export default MovingButton;
