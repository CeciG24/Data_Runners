// MapaDistritos.jsx
import React, { useState } from "react";
import "./MapaDistritos.css";
import distritoImg from "../assets/fondo_distrito.png";

const MapaDistritos = ({ setFase }) => {
  const [selectedButton, setSelectedButton] = useState(null);

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
    { number: 1, top: "85%", left: "35%", width: "80px", height: "80px" },
    { number: 2, top: "75%", left: "50%", width: "80px", height: "80px" },
    { number: 3, top: "100%", left: "72%", width: "80px", height: "80px" },
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
    </div>
  );
};

export default MapaDistritos;
