import React, { useRef, useEffect, useState } from "react";

const CiudadCoyolxaum = ({ top = "200px", left = "500px", scale = 5 }) => {
  const canvasRef = useRef(null);
  const [faseLuna, setFaseLuna] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const width = 40;
    const height = 35;
    canvas.width = width * scale;
    canvas.height = height * scale;

    const pixel = (x, y, color) => {
      if (x >= 0 && x < width && y >= 0 && y < height) {
        ctx.fillStyle = color;
        ctx.fillRect(x * scale, y * scale, scale, scale);
      }
    };

    // --- Inicializar lluvia ---
    const lluvia = Array.from({ length: 30 }, () => ({
      x: Math.floor(Math.random() * width),
      y: Math.floor(Math.random() * height),
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // --- Fondo oscuro sólido ---
      ctx.fillStyle = "#000010";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // --- Marco neón ---
      const azulNeon = "#00f0ff";
      for (let x = 0; x < width; x++) {
        pixel(x, 0, azulNeon);
        pixel(x, height - 1, azulNeon);
      }
      for (let y = 0; y < height; y++) {
        pixel(0, y, azulNeon);
        pixel(width - 1, y, azulNeon);
      }

      // --- Pirámide central (gris + verde tipo circuito) ---
      const baseX = 12;
      const baseY = 30;
      const baseW = 16;
      const altura = 12;

      for (let j = 0; j < altura; j++) {
        const filaW = baseW - Math.floor(j * 1.2);
        const startX = baseX + Math.floor((baseW - filaW) / 2);
        for (let i = 0; i < filaW; i++) {
          const color = Math.random() > 0.8 ? "#00ff44" : "#555555"; // verde y gris
          pixel(startX + i, baseY - j, color);
        }
        // escalera tipo circuito
        pixel(baseX + Math.floor(baseW / 2), baseY - j, "#00aa33");
      }

      // Bloques superiores de la pirámide
      for (let i = -1; i <= 1; i++) {
        pixel(baseX + Math.floor(baseW / 2) + i, baseY - altura, "#00ff44");
      }

      // Pilares con verde tipo circuito
      for (let j = 0; j < 10; j++) {
        pixel(5, baseY - j, j % 2 === 0 ? "#777777" : "#00cc44");
        pixel(width - 6, baseY - j, j % 2 === 0 ? "#777777" : "#00cc44");
      }

      // Esculturas geométricas gris-verde
      for (let j = 0; j < 6; j++) {
        pixel(3, baseY - j, "#00cc44");
        pixel(width - 4, baseY - j, "#00cc44");
      }

      // Luces parpadeantes (verde/azul) en pirámide
      for (let i = 0; i < 8; i++) {
        const rx = baseX + Math.floor(Math.random() * baseW);
        const ry = baseY - Math.floor(Math.random() * altura);
        pixel(rx, ry, Math.random() > 0.5 ? "#00f0ff" : "#00ff44");
      }

      // --- Lluvia más lenta ---
      for (let i = 0; i < lluvia.length; i++) {
        lluvia[i].y += 1; // velocidad lenta y constante
        if (lluvia[i].y >= height) {
          lluvia[i].y = 0;
          lluvia[i].x = Math.floor(Math.random() * width);
        }
        pixel(lluvia[i].x, lluvia[i].y, "#00eaff");
      }

      // --- Luna con halo ---
      const lunaX = 32;
      const lunaY = 6;
      const radio = 5;

      for (let y = -radio - 1; y <= radio + 1; y++) {
        for (let x = -radio - 1; x <= radio + 1; x++) {
          if (x * x + y * y <= (radio + 1) * (radio + 1)) {
            let sombra = false;
            const fase = faseLuna % 8;
            if (fase <= 4 && x < fase - 2) sombra = true;
            if (fase > 4 && x > 6 - fase) sombra = true;
            pixel(
              lunaX + x,
              lunaY + y,
              sombra ? "#111111" : y * y + x * x > radio * radio ? "#666622" : "#ffffaa"
            );
          }
        }
      }
    };

    // Animación
    let anim;
    const loop = () => {
      draw();
      anim = requestAnimationFrame(loop);
    };
    loop();

    return () => cancelAnimationFrame(anim);
  }, [scale, faseLuna]);

  // Fase lunar
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

export default CiudadCoyolxaum;
