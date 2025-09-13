// src/pages/MapaFase.jsx
import { useNavigate } from "react-router-dom";
import mapaFondo from "/background/fondo_fase_3.png";

import NivelButton from "../components/NivelButton.jsx";

// Imágenes de botones
import nivel1Img from "/nivel/nivel3_1.png";
import nivel2Img from "/nivel/nivel3_2.png";
import nivel3Img from "/nivel/nivel3_3.png";

export default function Fase3({setFase}) {
  // Posición del botón Mapa Principal
  const botonMapaPrincipal = { top: "90%", left: "93%", width: "120px", height: "50px" };

  // Posición del botón Wiki (búho)
  const wikiButtonPosition = { top: "20%", left: "5%", width: "100px", height: "100px" };

  const navigate = useNavigate();

  const irANivel = (nivel) => {
    if (nivel === 1) setFase("faseMercado1");
    else if (nivel === 2) setFase("faseMercado2");
    else if (nivel === 3) setFase("faseMercado3");
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
          onClick={() => setFase("wiki3")}
        >
          🦉
        </button>
    </div>
  );
}
