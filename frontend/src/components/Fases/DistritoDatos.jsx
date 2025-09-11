import React, { useRef, useEffect, useState } from "react";

const DistritoDatos = ({ top = "150px", left = "300px", scale = 5 }) => {
  const canvasRef = useRef(null);
  const [faseLuna, setFaseLuna] = useState(0);

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

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // --- Fondo oscuro ---
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const darkTone = `rgb(${Math.floor(Math.random() * 20)}, ${Math.floor(
            Math.random() * 20
          )}, ${Math.floor(Math.random() * 20)})`;
          pixel(x, y, darkTone);
        }
      }

      // --- Marco azul neón ---
      const azulNeon = "#00f0ff";
      for (let x = 0; x < width; x++) {
        pixel(x, 0, azulNeon);
        pixel(x, height - 1, azulNeon);
      }
      for (let y = 0; y < height; y++) {
        pixel(0, y, azulNeon);
        pixel(width - 1, y, azulNeon);
      }

      // --- Edificios ---
      const edificios = [
        { x: 4, y: 25, w: 5, h: 10, punta: true },
        { x: 10, y: 26, w: 4, h: 9, punta: false },
        { x: 15, y: 24, w: 6, h: 12, punta: true },
        { x: 22, y: 26, w: 5, h: 8, punta: false },
      ];

      edificios.forEach(({ x, y, w, h, punta }) => {
        for (let j = 0; j < h; j++) {
          for (let i = 0; i < w; i++) {
            if (punta) {
              const alturaRestante = h - j;
              const centro = Math.floor(w / 2);
              if (i < centro - alturaRestante + 1 || i > centro + alturaRestante - 1) continue;
            }

            const grayTone =
              Math.random() > 0.6
                ? "#555555"
                : Math.random() > 0.5
                ? "#777777"
                : "#999999";

            pixel(x + i, y - j, grayTone);
          }
        }

        // Manchas verdes
        for (let k = 0; k < Math.floor(w * h * 0.15); k++) {
          const mx = x + Math.floor(Math.random() * w);
          const my = y - Math.floor(Math.random() * h);
          pixel(mx, my, "#2e7d32");
        }

        // Ventanas rotas
        for (let i = 0; i < w; i++) {
          for (let j = 0; j < h; j++) {
            if (Math.random() > 0.85) pixel(x + i, y - j, "#222200");
          }
        }
      });

      // Luces parpadeantes
      for (let i = 0; i < 6; i++) {
        const bld = edificios[Math.floor(Math.random() * edificios.length)];
        const bx = bld.x + Math.floor(Math.random() * bld.w);
        const by = bld.y - Math.floor(Math.random() * bld.h);
        pixel(bx, by, "#00ffcc");
      }

      // --- Luna dinámica ---
      const lunaX = 25;
      const lunaY = 5;
      const radio = 4;

      for (let y = -radio; y <= radio; y++) {
        for (let x = -radio; x <= radio; x++) {
          if (x * x + y * y <= radio * radio) {
            let sombra = false;
            const fase = faseLuna % 8; // 8 fases
            if (fase <= 4 && x < fase - 2) sombra = true; // creciente
            if (fase > 4 && x > 6 - fase) sombra = true; // menguante
            pixel(lunaX + x, lunaY + y, sombra ? "#111111" : "#ffffaa");
          }
        }
      }
    };

    draw();
  }, [scale, faseLuna]);

  // Cambiar fase cada 1.5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setFaseLuna((f) => (f + 1) % 8);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

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

export default DistritoDatos;
