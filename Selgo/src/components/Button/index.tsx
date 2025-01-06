import React from "react";
import "./styles.css";

interface ButtonProps {
  name?: string;
  color?: string;
  width?: number;
  height?: number;
}

const Button: React.FC<ButtonProps> = ({ name, width, height }) => {
  return (
    <button
      style={{
        width: width,
        height: height,
      }}
    >
      <img src="/src/assets/icons/Button/maps-location-01.png" alt="icon" />
      {name}
    </button>
  );
};

export default Button;
