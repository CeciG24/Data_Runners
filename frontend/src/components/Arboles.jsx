import React, { useRef, useEffect } from "react";

const Arboles = ({ x = 40, y = 65, scale = 6 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const w = 10;  // tamaño de base del árbol
    const h = 10;
    canvas.width = w * scale;
    canvas.height = h * scale;

    const pixel = (px, py, color) => {
      ctx.fillStyle = color;
      ctx.fillRect(px * scale, py * scale, scale, scale);
    };

    // Tronco
    pixel(4, 7, "#4b2e19");
    pixel(4, 8, "#4b2e19");
    pixel(4, 9, "#4b2e19");

    // Copa
    const copa = [
      [3, 4, "#0ff"], [4, 4, "#0cc"], [5, 4, "#0ff"],
      [2, 5, "#0aa"], [3, 5, "#0dd"], [4, 5, "#0bb"], [5, 5, "#0dd"], [6, 5, "#0aa"],
      [3, 6, "#0bb"], [4, 6, "#0dd"], [5, 6, "#0bb"]
    ];
    copa.forEach(([px, py, color]) => pixel(px, py, color));
  }, [scale]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        left: `${x}vw`,
        top: `${y}vh`,
        width: `${10 * scale}px`,
        height: `${10 * scale}px`,
      }}
    />
  );
};

export default Arboles;
