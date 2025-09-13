import React, { useState, useEffect } from "react";
import "./WikiBosque.css";
import buhoImg from "../img/buho-robot.png"; // imagen del búho
import axios from "axios";

const temas = [
  "Select",
  "Order by y limit",
  "Join",
  "Índices",
  "Transacciones",
  "Triggers",
  "Roles y permisos"
];

const WikiBosque = ({ token, setFase }) => {
  const [temaActual, setTemaActual] = useState(null);
  const [contenido, setContenido] = useState({ titulo: "", texto: "" });

  const handleTemaClick = async (tema) => {
    setTemaActual(tema);
    try {
      const res = await axios.get(
        `https://datarunnersdeploy.onrender.com/wiki/tema/${tema}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setContenido({
        titulo: res.data.titulo,
        texto: res.data.texto
      });
    } catch (err) {
      console.error("Error al cargar contenido del tema:", err);
      setContenido({ titulo: "Error", texto: "No se pudo cargar el contenido" });
    }
  };

  return (
    <div className="wiki-bosque">
      <div className="wiki-fondo" />
        <button
          className="btn-volver"
          onClick={() => setFase("mapaBosque")}
          style={{
            position: "absolute",
            top: "600px",
            left: "200px",
            padding: "10px 20px",
            backgroundColor: "#792a96ff",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          🔙 Volver
        </button>
      <div className="wiki-panel">
        {/* Búho animado */}
        <div className="buho-container">
          <img src={buhoImg} alt="Búho" className="buho-img" />
        </div>


        

        {/* Botones de temas */}
        <div className="wiki-dialogo">
          {temas.map((tema) => (
            <button
              key={tema}
              className="btn-siguiente"
              onClick={() => handleTemaClick(tema)}
            >
              {tema}
            </button>
          ))}

          {/* Cuadro de texto */}
          {temaActual && (
            <div className="wiki-cuadro">
              <h2>{contenido.titulo}</h2>
              <p>{contenido.texto}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WikiBosque;
