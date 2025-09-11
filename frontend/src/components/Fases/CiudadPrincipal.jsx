import { useEffect, useRef } from "react";

function CiudadPrincipal({ size = 200 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = size;
    canvas.height = size;

    const W = canvas.width;
    const H = canvas.height;

    let moonPhase = 0;

    function drawBackground() {
      // Fondo degradado interno al icono
      const gradient = ctx.createLinearGradient(0, 0, 0, H);
      gradient.addColorStop(0, "#001f5b");
      gradient.addColorStop(1, "#000000");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, W, H);
    }

    function drawMoon() {
      const x = W * 0.8;
      const y = H * 0.2;
      const r = W * 0.15;

      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = "#cccccc";
      ctx.fill();

      ctx.save();
      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(x + moonPhase * (r / 2), y, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    function drawTemple() {
      // Pirámide-templo
      ctx.fillStyle = "#00ff66";
      ctx.beginPath();
      ctx.moveTo(W / 2 - W * 0.35, H);
      ctx.lineTo(W / 2, H * 0.3);
      ctx.lineTo(W / 2 + W * 0.35, H);
      ctx.closePath();
      ctx.fill();

      // Escalinata
      ctx.strokeStyle = "#001f5b";
      ctx.lineWidth = 2;
      for (let i = 0; i < 6; i++) {
        let y = H - i * (H * 0.1);
        ctx.beginPath();
        ctx.moveTo(W / 2 - (W * 0.35 - i * 12), y);
        ctx.lineTo(W / 2 + (W * 0.35 - i * 12), y);
        ctx.stroke();
      }

      // Pilares laterales
      ctx.fillStyle = "#001f5b";
      ctx.fillRect(W * 0.1, H * 0.55, W * 0.08, H * 0.4);
      ctx.fillRect(W * 0.82, H * 0.55, W * 0.08, H * 0.4);

      // Esculturas geométricas
      ctx.fillStyle = "#00ff66";
      ctx.fillRect(W * 0.05, H * 0.7, W * 0.1, H * 0.25);
      ctx.fillRect(W * 0.85, H * 0.7, W * 0.1, H * 0.25);
    }

    function animate() {
      ctx.clearRect(0, 0, W, H);
      drawBackground();
      drawMoon();
      drawTemple();

      moonPhase += 0.01;
      if (moonPhase > 2) moonPhase = -2;

      requestAnimationFrame(animate);
    }

    animate();
  }, [size]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: "block",
        width: size,
        height: size,
        border: "2px solid #00ff66",
        borderRadius: "12px",
      }}
    />
  );
}

export default CiudadPrincipal;
