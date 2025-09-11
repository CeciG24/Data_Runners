// src/pages/MapaFase.jsx
import { useNavigate } from "react-router-dom";
import mapaFondo from "/background/fondo_fase_3.png";

import NivelButton from "../components/NivelButton.jsx";

// Imágenes de botones
import nivel1Img from "/nivel/nivel1.png";
import nivel2Img from "/nivel/nivel2.png";
import nivel3Img from "/nivel/nivel3.png";

export default function MapaFase() {
  const navigate = useNavigate();

  const irANivel = (nivel) => {
    navigate(`/fase3/${nivel}`);
  };

  return (
    <div
      className="relative h-screen w-screen bg-black flex items-center justify-center"
      style={{
        backgroundImage: `url(${mapaFondo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
        <h1 className="absolute text-6xl top-15 text-[#615039]">Mercado de memoria</h1>
      {/* SVG de líneas */}
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        {/* Línea del nivel 1 al nivel 2 */}
        <line
        x1="33%" y1="65%"
        x2="33%" y2="45%"
        stroke="#7d6b52" strokeWidth="8" strokeLinecap="round"
        />

        <line
        x1="33.5%" y1="45%"
        x2="50%" y2="45%"
        stroke="#7d6b52" strokeWidth="12" strokeLinecap="round"
        />
        {/* Línea del nivel 2 al nivel 3 */}
        <line
        x1="50%" y1="45%"
        x2="72.5%" y2="45%"
        stroke="#7d6b52" strokeWidth="12" strokeLinecap="round"
        />
        <line
        x1="73%" y1="45%"
        x2="73%" y2="60%"
        stroke="#7d6b52" strokeWidth="8" strokeLinecap="round"
        />
      </svg>

      {/* Botones de niveles */}
      <NivelButton
        numero={1}
        img={nivel1Img}
        posicion={{ top: "65%", left: "30%" }}
        scale={1.2}
        onClick={() => irANivel(1)}
      />

      <NivelButton
        numero={2}
        img={nivel2Img}
        posicion={{ top: "40%", left: "46%" }}
        scale={1}
        onClick={() => irANivel(2)}
      />

      <NivelButton
        numero={3}
        img={nivel3Img}
        posicion={{ top: "60%", left: "70%" }}
        scale={1.1}
        onClick={() => irANivel(3)}
      />
    </div>
  );
}
