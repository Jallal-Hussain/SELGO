import React from "react";
import "./styles.css";

interface ButtonProps {
  name?: string;
  color?: string;
  width?: number;
  height?: number;
  variant?: "filled" | "outlined" | "icon-btn";
}

const Button: React.FC<ButtonProps> = ({ variant, name, width, height }) => {
  return variant === "filled" ? (
    <button
      className="filled-btn"
      style={{
        width: width,
        height: height,
      }}
    >
      {name}
    </button>
  ) : variant === "outlined" ? (
    <button
      className="outlined-btn"
      style={{
        width: width,
        height: height,
      }}
    >
      {name}
    </button>
  ) : variant === "icon-btn" ? (
    <button
      className="icon-btn"
      style={{
        width: width,
        height: height,
      }}
    >
      <img src="/src/assets/icons/Button/maps-location-01.png" alt="icon" />
      {name}
    </button>
  ) : null;
};

export default Button;
