import React, { useRef, useEffect } from "react";

const Chozas = ({ x = 200, y = 200, scale = 5 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const w = 14;
    const h = 12;
    canvas.width = w * scale;
    canvas.height = h * scale;

    const pixel = (px, py, color) => {
      ctx.fillStyle = color;
      ctx.fillRect(px * scale, py * scale, scale, scale);
    };

    // Base
    for (let px = 4; px <= 9; px++) {
      for (let py = 6; py <= 10; py++) {
        pixel(px, py, "#4b2e19");
      }
    }

    // Techo
    for (let px = 3; px <= 10; px++) pixel(px, 5, "#9acd32");
    for (let px = 2; px <= 11; px++) pixel(px, 4, "#6b8e23");
    for (let px = 1; px <= 12; px++) pixel(px, 3, "#556b2f");

    // Puerta
    pixel(6, 8, "#000");
    pixel(7, 8, "#000");
    pixel(6, 9, "#000");
    pixel(7, 9, "#000");

    // Luces neón
    pixel(4, 7, "#0ff");
    pixel(9, 7, "#0ff");
    pixel(5, 10, "#0cc");
    pixel(8, 10, "#0cc");
  }, [scale]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        left: `${x}px`,
        top: `${y}px`,
        imageRendering: "pixelated", // para mantener estilo pixel
      }}
    />
  );
};

export default Chozas;
