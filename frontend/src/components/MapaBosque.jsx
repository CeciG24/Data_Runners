import React, { useState } from "react";
import "./MapaBosque.css";
import bosqueImg from "../assets/BosqueCodigos.png"; // ruta correcta
import FaseBosque from "./FaseBosque.jsx";
import FaseBosque2 from "./FaseBosque2.jsx";
import FaseBosque3 from "./FaseBosque3.jsx";

const MapaBosque = ({ setFase }) => {
  const [selectedButton, setSelectedButton] = useState(null);

  // Posición del botón Mapa Principal
  const botonMapaPrincipal = { top: "90%", left: "80%", width: "120px", height: "50px" };

  // Posición del botón Wiki (búho)
  const wikiButtonPosition = { top: "20%", left: "5%", width: "100px", height: "100px" };

  const handleButtonClick = (number) => {
    setSelectedButton(selectedButton === number ? null : number);

    // Redirigir a los niveles correspondientes
    setTimeout(() => {
      if (number === 1) {
        setFase("faseBosque"); // Nivel 1
      } else if (number === 2) {
        setFase("faseBosque2"); // Nivel 2
      } else if (number === 3) {
        setFase("faseBosque3"); // Nivel 3
      }
    }, 500);
  };

  const buttonPositions = [
    { number: 1, top: "90%", left: "29%", width: "80px", height: "80px" },
    { number: 2, top: "32%", left: "51%", width: "80px", height: "80px" },
    { number: 3, top: "69%", left: "79%", width: "80px", height: "80px" }
  ];

  return (
    <div
      className="mapa-bosque"
      style={{ backgroundImage: `url(${bosqueImg})` }}
    >
      {/* Botones */}
      <div className="buttons-container">
        {buttonPositions.map((pos) => (
          <button
            key={pos.number}
            className={`transparent-button ${selectedButton === pos.number ? "selected" : ""}`}
            style={{
              top: pos.top,
              left: pos.left,
              width: pos.width,
              height: pos.height
            }}
            onClick={() => handleButtonClick(pos.number)}
          />
        ))}
      </div>

      {selectedButton && (
        <div className="selection-indicator">
          Nivel Seleccionado: {selectedButton}
        </div>
      )}
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
          onClick={() => setFase("wiki1")}
        >
          🦉
        </button>
    </div>
  );
};

export default MapaBosque;
