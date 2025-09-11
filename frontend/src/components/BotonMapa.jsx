import React from "react";

const BotonMapa = ({
  texto = "Click aquí",
  top = "50px",
  left = "50px",
  onClick,
  width = "130px",
  height = "65px",
  fontSize = "16px",
  color = "#0cc",
  bgColor = "rgba(20,20,40,0.8)",
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        position: "absolute",
        top,
        left,
        width,
        height,
        fontSize,
        color,
        backgroundColor: bgColor,
        border: "2px solid #0cc",
        borderRadius: "8px",
        cursor: "pointer",
        zIndex: 3,
        imageRendering: "pixelated",
      }}
    >
      {texto}
    </button>
  );
};

export default BotonMapa;
