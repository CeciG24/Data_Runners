import React, { useRef, useEffect } from "react";

const Procesador = ({ top = "300px", left = "600px", scale = 5 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // 🎯 Mini lienzo, no toda la pantalla
    const width = 30;
    const height = 30;
    canvas.width = width * scale;
    canvas.height = height * scale;

    const pixel = (x, y, color) => {
      ctx.fillStyle = color;
      ctx.fillRect(x * scale, y * scale, scale, scale);
    };

    // 📌 Centro del sprite
    const cx = Math.floor(width / 2);
    const cy = Math.floor(height / 2);

    // --- Escalones rellenos ---
    const stepColors = ["#1b3a40", "#20454d", "#28575f"]; // tonos azul verdoso
    for (let step = 0; step < stepColors.length; step++) {
      const size = 6 - step * 2;
      const color = stepColors[step];
      for (let x = cx - size; x <= cx + size; x++) {
        for (let y = cy - size; y <= cy + size; y++) {
          pixel(x, y, color);
        }
      }
    }

    // --- Chip central ---
    for (let x = cx - 2; x <= cx + 2; x++) {
      for (let y = cy - 2; y <= cy + 2; y++) {
        const isBorder =
          x === cx - 2 || x === cx + 2 || y === cy - 2 || y === cy + 2;
        pixel(x, y, isBorder ? "#8ff0e8" : "#2c7d77");
      }
    }
    pixel(cx, cy, "#dffff9"); // Glow central

    // --- Circuitos en cruz ---
    const directions = [
      [1, 0],  // derecha
      [-1, 0], // izquierda
      [0, -1], // arriba
      [0, 1],  // abajo
    ];

    directions.forEach(([dx, dy]) => {
      let x = cx;
      let y = cy;
      for (let i = 0; i < 5; i++) {
        const col = i % 2 === 0 ? "#7fe6df" : "#3ecdc2";
        pixel(x, y, col);
        x += dx;
        y += dy;
      }
      pixel(x, y, "#dffef8"); // punto brillante al final
    });

    // --- Antenas en esquinas ---
    const corners = [
      [cx - 4, cy - 4],
      [cx + 4, cy - 4],
      [cx - 4, cy + 4],
      [cx + 4, cy + 4],
    ];
    corners.forEach(([x, y]) => {
      pixel(x, y, "#55cbbf");
      pixel(x, y - 1, "#aaf3ea");
    });

  }, [scale]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top,
        left,
        imageRendering: "pixelated",
        zIndex: 2, // encima del fondo
      }}
    />
  );
};

export default Procesador;
