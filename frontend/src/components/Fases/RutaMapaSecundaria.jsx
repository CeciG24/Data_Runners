import React, { useRef, useEffect } from "react";

const RutaMapaSecundaria = ({ puntos, color = "#0077ff", grosor = 8 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // 🔹 Asegurar que el canvas cubre la pantalla
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = color;
    ctx.lineWidth = grosor;
    ctx.lineCap = "round";

    if (!puntos || puntos.length < 2) return;

    ctx.beginPath();
    ctx.moveTo(puntos[0].x, puntos[0].y);

    for (let i = 1; i < puntos.length; i++) {
      const prev = puntos[i - 1];
      const curr = puntos[i];
      const midX = (prev.x + curr.x) / 2;
      const midY = (prev.y + curr.y) / 2;
      ctx.quadraticCurveTo(prev.x, prev.y, midX, midY);
    }

    const last = puntos[puntos.length - 1];
    ctx.lineTo(last.x, last.y);

    ctx.stroke();
  }, [puntos, color, grosor]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 1, // 🔹 lo pongo encima del fondo
        pointerEvents: "none",
      }}
    />
  );
};

export default RutaMapaSecundaria;
