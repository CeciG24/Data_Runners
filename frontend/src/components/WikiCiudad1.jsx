import React, { useState, useEffect } from "react";
import "./WikiBosque.css";
import buhoImg from "../img/buho-robot.png";
import axios from "axios";

const WikiBosque = ({ token, setFase }) => {
  const [wikis, setWikis] = useState([]);

  // Cargar todos los wikis al montar el componente
  useEffect(() => {
    const fetchWikis = async () => {
      try {
        const res = await axios.get("https://datarunnersdeploy.onrender.com/wiki/", {
          headers: { Authorization: `Bearer ${token}` }
        });
        setWikis(res.data.wiki);
      } catch (err) {
        console.error("Error al cargar wikis:", err);
      }
    };
    fetchWikis();
  }, [token]);

  return (
    <div className="wiki-bosque">
      <div className="wiki-fondo" />
      <button
        className="btn-volver"
        onClick={() => setFase("coyalxuh")}
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
        <div className="buho-container">
          <img src={buhoImg} alt="Búho" className="buho-img" />
        </div>

        <div className="wiki-dialogo">
          {wikis.length === 0 && <p>Cargando contenido...</p>}

          {wikis.map((wiki, index) => (
            <div key={index} className="wiki-cuadro">
              <h2>{wiki.titulo}</h2>
              <p>{wiki.contenido}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WikiBosque;

