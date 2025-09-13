// src/pages/MapaFase.jsx
import { useNavigate } from "react-router-dom";
import mapaFondo from "/background/fondo_fase_4.png";

import NivelButton from "../components/NivelButton.jsx";

// Imágenes de botones
import nivel1Img from "/nivel/nivel4_1.png";
import nivel2Img from "/nivel/nivel4_2.png";
import nivel3Img from "/nivel/nivel4_3.png";

export default function Fase4({ setFase }) {
  // Posición del botón Mapa Principal
  const botonMapaPrincipal = { top: "90%", left: "90%", width: "120px", height: "50px" };

  // Posición del botón Wiki (búho)
  const wikiButtonPosition = { top: "20%", left: "5%", width: "100px", height: "100px" };

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
      {/* Botón Mapa Principal */}
        <button
          style={{
            position: "absolute",
            top: botonMapaPrincipal.top,
            left: botonMapaPrincipal.left,
            width: botonMapaPrincipal.width,
            height: botonMapaPrincipal.height,
            backgroundColor: "#2a9631",
            color: "white",
            border: "2px solid #fff",
            borderRadius: "10px",
            fontWeight: "bold",
            fontSize: "1rem",
            cursor: "pointer",
            zIndex: 20,
          }}
          onClick={() => setFase("mapa")}
        >
          🏠 Mapa Principal
        </button>

        {/* Botón Wiki (búho) */}
        <button
          style={{
            position: "absolute",
            top: wikiButtonPosition.top,
            left: wikiButtonPosition.left,
            width: wikiButtonPosition.width,
            height: wikiButtonPosition.height,
            backgroundColor: "#444",
            color: "white",
            border: "2px solid #fff",
            borderRadius: "50%",
            fontSize: "2rem",
            cursor: "pointer",
            zIndex: 20,
          }}
          onClick={() => setFase("wiki4")}
        >
          🦉
        </button>
    </div>
  );
}
