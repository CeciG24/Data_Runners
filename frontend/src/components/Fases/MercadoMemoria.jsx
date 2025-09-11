import React, { useRef, useEffect, useState } from "react";

const MercadoMemoria = ({ top = "560px", left = "600px", scale = 5 }) => {
  const canvasRef = useRef(null);
  const [brillo, setBrillo] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const width = 50;
    const height = 35;
    canvas.width = width * scale;
    canvas.height = height * scale;

    const pixel = (x, y, color) => {
      ctx.fillStyle = color;
      ctx.fillRect(x * scale, y * scale, scale, scale);
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // --- Fondo oscuro con estrellas pequeñas ---
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const darkTone = `rgb(${Math.floor(Math.random() * 15)}, ${Math.floor(
            Math.random() * 15
          )}, ${Math.floor(Math.random() * 30)})`;
          pixel(x, y, darkTone);
        }
      }

      // Estrellas pequeñas parpadeantes
      for (let i = 0; i < 20; i++) {
        const sx = Math.floor(Math.random() * width);
        const sy = Math.floor(Math.random() * (height - 10));
        const starColor = Math.random() > 0.5 ? "#ffffff" : "#ccccff";
        pixel(sx, sy, starColor);
      }

      // --- Marco morado neón ---
      const neonColor = "#b300ff";
      for (let x = 0; x < width; x++) {
        pixel(x, 0, neonColor);
        pixel(x, height - 1, neonColor);
      }
      for (let y = 0; y < height; y++) {
        pixel(0, y, neonColor);
        pixel(width - 1, y, neonColor);
      }

      // --- Edificio principal ancho ---
      const buildingColor = "#27154D"; // morado base
      const windowColor = "#ffeb3b"; // amarillo ventanas
      const antennaColor = "#ffeb3b"; // antena amarilla
      const detailColor = "#5AAFD3"; // detalles de memoria/circuitos

      const mainMarket = { x: 12, y: 27, w: 10, h: 6, pisos: 2 };
      for (let piso = 0; piso < mainMarket.pisos; piso++) {
        for (let x = 0; x < mainMarket.w; x++) {
          for (let y = 0; y < mainMarket.h; y++) {
            pixel(
              mainMarket.x + x,
              mainMarket.y - y - piso * mainMarket.h,
              buildingColor
            );
          }
        }
        for (let x = 1; x < mainMarket.w - 1; x += 2) {
          for (let y = 1; y < mainMarket.h - 1; y += 2) {
            pixel(
              mainMarket.x + x,
              mainMarket.y - y - piso * mainMarket.h,
              windowColor
            );
          }
        }
      }

      // Antena estilo "oIo"
      const antX = mainMarket.x + Math.floor(mainMarket.w / 2);
      const antY = mainMarket.y - 2 * mainMarket.h;
      pixel(antX, antY, antennaColor);
      pixel(antX, antY - 1, detailColor);
      pixel(antX, antY - 2, antennaColor);

      for (let i = 0; i < 10; i++) {
        const dx = Math.floor(Math.random() * mainMarket.w);
        const dy = Math.floor(Math.random() * mainMarket.h);
        pixel(
          mainMarket.x + dx,
          mainMarket.y -
            dy -
            Math.floor(mainMarket.pisos / 2) * mainMarket.h,
          detailColor
        );
      }

      // --- Puestos secundarios ---
      const puestos = [
        { x: 4, y: 25, pisos: 1 },
        { x: 23, y: 26, pisos: 2 },
        { x: 29, y: 25, pisos: 1 },
      ];

      puestos.forEach((p) => {
        for (let piso = 0; piso < p.pisos; piso++) {
          for (let x = 0; x < 5; x++) {
            for (let y = 0; y < 6; y++) {
              pixel(p.x + x, p.y - y - piso * 6, buildingColor);
            }
          }
          for (let x = 1; x < 4; x += 2) {
            for (let y = 1; y < 5; y += 2) {
              pixel(p.x + x, p.y - y - piso * 6, windowColor);
            }
          }
        }

        const roofH = 3;
        for (let h = 0; h < roofH; h++) {
          for (let x = h; x < 5 - h; x++) {
            const color = ["#4a148c", "#5e35b1", "#7b1fa2"][
              Math.floor(Math.random() * 3)
            ];
            pixel(p.x + x, p.y - p.pisos * 6 - h, color);
          }
        }

        if (p.pisos === 2) {
          pixel(p.x + 2, p.y - 2 * 6 - roofH, antennaColor);
        }

        for (let i = 0; i < 5; i++) {
          const dx = Math.floor(Math.random() * 5);
          const dy = Math.floor(Math.random() * 6);
          pixel(
            p.x + dx,
            p.y - dy - Math.floor(p.pisos / 2) * 6,
            detailColor
          );
        }
      });

      // --- Calles ---
      for (let y = 26; y < 28; y++) {
        for (let x = 0; x < width; x++) {
          pixel(x, y, "#222222");
        }
      }

      // --- Poste de luz al lado derecho ---
      const posteX = 42;
      const posteY = 25;
      for (let y = 0; y < 8; y++) {
        pixel(posteX, posteY - y, "#aaaaaa"); // poste
      }
      pixel(posteX - 1, posteY - 8, "#ffffcc");
      pixel(posteX, posteY - 8, "#ffff99");
      pixel(posteX + 1, posteY - 8, "#ffffcc");

      // --- Banca ---
      const benchX = 36;
      const benchY = 25;
      for (let x = 0; x < 5; x++) {
        pixel(benchX + x, benchY, "#8b4513");
        pixel(benchX + x, benchY - 1, "#5c3317");
      }

      // --- Estrella principal animada ---
      const starX = 40;
      const starY = 5;
      const maxSize = 3;
      const size = 1 + (brillo % maxSize);

      for (let y = -size; y <= size; y++) {
        for (let x = -size; x <= size; x++) {
          if (Math.abs(x) + Math.abs(y) <= size) {
            pixel(starX + x, starY + y, "#ffffcc");
          }
        }
      }
    };

    draw();
  }, [scale, brillo]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBrillo((b) => (b + 1) % 6);
    }, 800);
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

export default MercadoMemoria;
