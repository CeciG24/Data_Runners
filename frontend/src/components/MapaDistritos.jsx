// MapaDistritos.jsx
import React, { useState } from "react";
import "./MapaDistritos.css";
import distritoImg from "../assets/fondo_distrito.png";

const MapaDistritos = ({ setFase }) => {
  const [selectedButton, setSelectedButton] = useState(null);
  // Posición del botón Mapa Principal
  const botonMapaPrincipal = { top: "90%", left: "90%", width: "120px", height: "50px" };

  // Posición del botón Wiki (búho)
  const wikiButtonPosition = { top: "20%", left: "5%", width: "100px", height: "100px" };


  const handleButtonClick = (number) => {
    setSelectedButton(number);

    // Cada botón manda a su respectivo nivel
    switch (number) {
      case 1:
        setFase("distrito1");
        break;
      case 2:
        setFase("distrito2");
        break;
      case 3:
        setFase("distrito3");
        break;
      default:
        setFase(null);
    }
  };

  const buttonPositions = [
    { number: 1, top: "95%", left: "40%", width: "80px", height: "80px" },
    { number: 2, top: "75%", left: "50%", width: "80px", height: "80px" },
    { number: 3, top: "95%", left: "72%", width: "80px", height: "80px" },
  ];

  return (
    <div
      className="mapa-distritos"
      style={{ backgroundImage: `url(${distritoImg})` }}
    >
      <div className="buttons-container">
        {buttonPositions.map((pos) => (
          <button
            key={pos.number}
            className={`transparent-button ${selectedButton === pos.number ? "selected" : ""}`}
            style={{
              top: pos.top,
              left: pos.left,
              width: pos.width,
              height: pos.height,
            }}
            onClick={() => handleButtonClick(pos.number)}
          />
        ))}
      </div>

      {selectedButton && (
        <div className="selection-indicator">
          Distrito Seleccionado: {selectedButton}
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
        onClick={() => setFase("wiki2")}
      >
        🦉
      </button>
    </div>
  );
};

export default MapaDistritos;
