import React, { useState, useEffect } from "react";
import "./MapaBosque.css";
import bosqueImg from "../assets/BosqueCodigos.png";

const MapaBosque = ({ setFase, token }) => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [nivelesDisponibles, setNivelesDisponibles] = useState([]);
  const [showAlerta, setShowAlerta] = useState(false);
  const [alertaMensaje, setAlertaMensaje] = useState("");

  // Posición del botón Mapa Principal
  const botonMapaPrincipal = { top: "90%", left: "80%", width: "120px", height: "50px" };

  // Posición del botón Wiki (búho)
  const wikiButtonPosition = { top: "20%", left: "5%", width: "100px", height: "100px" };

  useEffect(() => {
  const fetchNiveles = async () => {
    if (!token) {
  console.warn("Token no disponible, no se puede mostrar niveles");
  return <div>Cargando mapa...</div>;
}


    try {
      const res = await fetch(
        "https://datarunnersdeploy.onrender.com/niveles/disponibles/1",
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (!res.ok) {
        const errorData = await res.json();
        console.error("Error al traer niveles:", errorData);
        setNivelesDisponibles([]);
        return;
      }

      const data = await res.json();
      setNivelesDisponibles(data);
    } catch (err) {
      console.error("Error cargando niveles disponibles:", err);
      setNivelesDisponibles([]);
    }
  };

  fetchNiveles();
}, [token]);


  const handleButtonClick = (number) => {
    const nivel = nivelesDisponibles.find((n) => n.orden === number);
    if (!nivel?.desbloqueado) {
      setAlertaMensaje("🔒 Nivel bloqueado, vuelve al anterior");
      setShowAlerta(true);
      setTimeout(() => setShowAlerta(false), 3000);
      return;
    }

    setSelectedButton(selectedButton === number ? null : number);

    setTimeout(() => {
      if (number === 1) setFase("faseBosque");
      else if (number === 2) setFase("faseBosque2");
      else if (number === 3) setFase("faseBosque3");
    }, 500);
  };

  const buttonPositions = [
    { number: 1, top: "90%", left: "29%", width: "80px", height: "80px" },
    { number: 2, top: "32%", left: "51%", width: "80px", height: "80px" },
    { number: 3, top: "69%", left: "79%", width: "80px", height: "80px" },
  ];

  return (
    <div className="mapa-bosque" style={{ backgroundImage: `url(${bosqueImg})` }}>
      <div className="buttons-container">
        {/* Botones de niveles */}
        {buttonPositions.map((pos) => {
          const nivel = nivelesDisponibles.find((n) => n.orden === pos.number);
          const desbloqueado = nivel?.desbloqueado ?? false;

          return (
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
          );
        })}

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
          onClick={() => setFase("mapaPrincipal")}
        >
          🏠 Mapa Principal
        </button>

        {/* Botón WikiBosque1 (Búho) */}
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
          onClick={() => setFase("wiki1")} // 🔹 Cambiado para abrir la wiki
        >
          🦉
        </button>
      </div>

      {selectedButton && (
        <div className="selection-indicator">Nivel Seleccionado: {selectedButton}</div>
      )}

      {/* Alerta bloqueado */}
      {showAlerta && (
        <div className="modal-azteca" style={{ backgroundColor: "rgba(0,0,0,0.7)" }}>
          <div className="modal-content">
            <h2>{alertaMensaje}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapaBosque;
