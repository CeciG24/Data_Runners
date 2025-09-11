import React, { useRef, useEffect } from "react";

const BosqueCodigo = ({ top = "100px", left = "200px", scale = 6 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const width = 30;
    const height = 30;
    canvas.width = width * scale;
    canvas.height = height * scale;

    const pixel = (x, y, color) => {
      ctx.fillStyle = color;
      ctx.fillRect(x * scale, y * scale, scale, scale);
    };

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // --- Fondo ---
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const darkColor = `rgb(${Math.floor(Math.random() * 20)}, 0, ${Math.floor(Math.random() * 20)})`;
        pixel(x, y, darkColor);
      }
    }

    // --- Margen verde tipo código ---
    const verdeCodigo = "#00ff00";
    for (let x = 0; x < width; x++) {
      pixel(x, 0, verdeCodigo);          // borde superior
      pixel(x, height - 1, verdeCodigo); // borde inferior
    }
    for (let y = 0; y < height; y++) {
      pixel(0, y, verdeCodigo);          // borde izquierdo
      pixel(width - 1, y, verdeCodigo);  // borde derecho
    }

    // --- Función para dibujar árboles con tronco visible ---
    const drawTree = (tx, ty, trunkHeight = 4, crownSize = 3) => {
      for (let i = 0; i < trunkHeight; i++) {
        pixel(tx, ty - i, "#5c3c2e");
      }

      const greens = ["#38f7a8", "#26c98a", "#1d8d62"];
      let radius = crownSize;
      greens.forEach((g) => {
        for (let dx = -radius; dx <= radius; dx++) {
          for (let dy = -radius; dy <= radius; dy++) {
            if (dx * dx + dy * dy <= radius * radius) {
              pixel(tx + dx, ty - trunkHeight - 1 + dy, g);
            }
          }
        }
        radius--;
      });

      // Circuitos dentro de la copa
      for (let i = 0; i < 4; i++) {
        const cx = tx + Math.floor(Math.random() * (crownSize * 2 + 1)) - crownSize;
        const cy = ty - trunkHeight - 1 + Math.floor(Math.random() * (crownSize * 2 + 1)) - crownSize;
        pixel(cx, cy, "#00ffcc");
      }
    };

    // --- Árboles ---
    const arboles = [
      [6, 25, 4, 3],
      [12, 23, 4, 4],
      [18, 24, 4, 3],
      [24, 22, 4, 4],
      [28, 23, 4, 3],
    ];
    arboles.forEach(([x, y, th, cs]) => drawTree(x, y, th, cs));

    // --- Río pequeño de código binario ---
    for (let y = 26; y < 29; y++) {
      for (let x = 0; x < width; x++) {
        const color = Math.random() > 0.5 ? "#00ff00" : "#003300";
        pixel(x, y, color);
      }
    }

    // --- Códigos flotando ---
    for (let i = 0; i < 12; i++) {
      const x = Math.floor(Math.random() * width);
      const y = Math.floor(Math.random() * 20);
      pixel(x, y, Math.random() > 0.5 ? "#00ffcc" : "#99ffee");
    }
  }, [scale]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top,
        left,
        imageRendering: "pixelated",
        zIndex: 2,
      }}
    />
  );
};

export default BosqueCodigo;
