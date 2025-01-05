import React from "react";

interface ButtonProps {
  name?: string;
  color?: string;
  width?: number;
  height?: number;
  padding?: number;
  backgroundColor?: string;
  borderRadius?: number;
  fontSize?: number
}

const Button: React.FC<ButtonProps> = ({
  name,
  color,
  width,
  height,
  padding,
  backgroundColor,
  borderRadius,
  fontSize
}) => {
  return (
    <button
      style={{
        color: color,
        width: width,
        height: height,
        padding: padding,
        backgroundColor: backgroundColor,
        border: 'none',
        borderRadius: borderRadius,
        fontSize: fontSize
      }}
    >
      {name}
    </button>
  );
};

export default Button;
