// src/pages/MapaFase.jsx
import { useNavigate } from "react-router-dom";
import mapaFondo from "/background/fondo_fase_4.png";

import NivelButton from "../components/NivelButton.jsx";

// Imágenes de botones
import nivel1Img from "/nivel/nivel4_1.png";
import nivel2Img from "/nivel/nivel4_2.png";
import nivel3Img from "/nivel/nivel4_3.png";

export default function Fase4({ setFase }) {
  const navigate = useNavigate();

  const irANivel = (nivel) => {
    if (nivel === 1) setFase("faseCiudad1");
    else if (nivel === 2) setFase("faseCiudad2");
    else if (nivel === 3) setFase("faseCiudad3");
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
      {/* Botones de niveles */}
      <NivelButton
        numero={1}
        img={nivel1Img}
        posicion={{ top: "91%", left: "28.5%" }}
        scale={2}
        onClick={() => irANivel(1)}
        shadowColor={"0 0 15px rgba(89,173,215,0.9)"}

      />

      <NivelButton
        numero={2}
        img={nivel2Img}
        posicion={{ top: "42%", left: "49.75%" }}
        scale={2}
        onClick={() => irANivel(2)}
        shadowColor={"0 0 15px rgba(89,173,215,0.9)"}

      />

      <NivelButton
        numero={3}
        img={nivel3Img}
        posicion={{ top: "78.25%", left: "82%" }}
        scale={2.4}
        onClick={() => irANivel(3)}
        shadowColor={"0 0 15px rgba(89,173,215,0.9)"}

      />
    </div>
  );
}
