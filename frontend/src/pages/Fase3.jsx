// src/pages/MapaFase.jsx
import { useNavigate } from "react-router-dom";
import mapaFondo from "/background/fondo_fase_3.png";

import NivelButton from "../components/NivelButton.jsx";

// Imágenes de botones
import nivel1Img from "/nivel/nivel1.png";
import nivel2Img from "/nivel/nivel2.png";
import nivel3Img from "/nivel/nivel3.png";

export default function Fase3() {
  const navigate = useNavigate();

  const irANivel = (nivel) => {
    navigate(`/fase3/nivel${nivel}`);
  };

  return (
    <div
      className="
                  overflow-hidden
                  flex flex-col 
                  h-screen w-screen 
                  justify-center items-center 
                  bg-no-repeat
                "
      style={{
        backgroundImage: `url(${mapaFondo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* SVG de líneas */}
      {/* 
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        {/* Línea del nivel 1 al nivel 2 */}
        {/* 
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
        */}
        {/* Línea del nivel 2 al nivel 3 */}
        {/* 
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
      */}
      

      {/* Botones de niveles */}
      <NivelButton
        numero={1}
        img={nivel1Img}
        posicion={{ top: "95%", left: "29.5%" }}
        scale={1.9}
        onClick={() => irANivel(1)}
        shadowColor={"0 0 15px rgba(212,175,55,0.9)"}
      />

      <NivelButton
        numero={2}
        img={nivel2Img}
        posicion={{ top: "39.25%", left: "50.25%" }}
        scale={1.9}
        onClick={() => irANivel(2)}
        shadowColor={"0 0 15px rgba(212,175,55,0.9)"}

      />

      <NivelButton
        numero={3}
        img={nivel3Img}
        posicion={{ top: "78.25%", left: "81%" }}
        scale={3.1}
        onClick={() => irANivel(3)}
        shadowColor={"0 0 15px rgba(212,175,55,0.9)"}

      />
    </div>
  );
}
