import React, { useState, useEffect } from "react";
import "./FaseBosque.css";
import tigreImg from "../assets/leopardo.png";
import fondoBosque from "../assets/fondo_bosque.png";
import { useNavigate } from "react-router-dom";

const FaseBosque = () => {
  const [showModal, setShowModal] = useState(false);
  const [nivel, setNivel] = useState(null);
  const [query, setQuery] = useState("");
  const [feedback, setFeedback] = useState("");
  const [consejo, setConsejo] = useState(""); // 🔹 consejo mostrado

  useEffect(() => {
    const fetchNivel = async () => {
      try {
        const res = await fetch("https://datarunnersdeploy.onrender.com/niveles/1");
        const data = await res.json();
        setNivel(data.nivel);
      } catch (err) {
        console.error("Error cargando nivel:", err);
      }
    };

    fetchNivel();
  }, []);

  const handleConsultar = async () => {
    try {
      const res = await fetch("https://datarunnersdeploy.onrender.com/niveles/1/resolver", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query_usuario: query }),
      });

      const data = await res.json();
      setFeedback(data.feedback || "Error procesando la respuesta");
    } catch (err) {
      console.error("Error al enviar consulta:", err);
      setFeedback("Error de conexión con el servidor");
    }
  };

  const handleRendirse = () => {
    setShowModal(true);
    setTimeout(() => {
      navigate("/map");
    }, 6000);
  };

  // 🔹 Consejo hardcodeado para el nivel 1
  const handleConsejo = () => {
    setConsejo("💡 Consejo: Para este nivel necesitas listar solo el nombre de los guerreros. La consulta es SELECT, el campo es nombre y la tabla es guerreros;");
  };

  return (
    <div className="fase-bosque"
          style={{
                backgroundImage: `url(${fondoBosque})`,
              }}>
      {/* Columna izquierda - Tigre */}
      <div className="fase-left">
        <img src={tigreImg} alt="Tigre SQL" className="tigre-sql" />
      </div>

      {/* Columna derecha */}
      <div className="fase-right">
        {/* Encabezado */}
        <header className="fase-header">
          <span className="fase-url">https://www.Data-runners.com</span>
          <span className="fase-points">Points: 0000123</span>
        </header>

        {/* Nivel y tiempo */}
        <div className="fase-nivel">
          <p>{nivel ? `Nivel ${nivel.id_nivel}` : "Cargando nivel..."}</p>
          <span>00:03:31</span>
        </div>

        {/* Instrucciones */}
        <div className="fase-instrucciones">
          <p>{nivel ? nivel.enunciado : "Cargando instrucciones..."}</p>
        </div>

        {/* Área de query */}
        <textarea
          className="fase-query"
          placeholder="Escribe tu query..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></textarea>

        {/* Botones */}
        <div className="fase-botones">
          <button onClick={handleConsultar}>Consultar</button>
          <button onClick={() => alert("⚡ Habilidad no implementada aún")}>Habilidad</button>
          <button onClick={handleConsejo}>Consejo</button>
          <button onClick={handleRendirse}>Rendirse</button>
        </div>

        {/* Feedback del backend */}
        {feedback && (
          <div className="fase-feedback">
            <p>{feedback}</p>
          </div>
        )}

        {/* Consejo mostrado */}
        {consejo && (
          <div className="fase-consejo">
            <p>{consejo}</p>
          </div>
        )}

        {/* Tabla de ejemplo */}
        <table className="fase-tabla">
          <thead>
            <tr>
              <th>id_jugador</th>
              <th>nombre</th>
              <th>nivel</th>
              <th>puntaje</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>Gian007</td><td>5</td><td>1200</td></tr>
            <tr><td>2</td><td>IanAG</td><td>7</td><td>1800</td></tr>
            <tr><td>3</td><td>Ceci1010</td><td>3</td><td>1500</td></tr>
            <tr><td>4</td><td>Val</td><td>10</td><td>3000</td></tr>
            <tr><td>5</td><td>LeoPardo1</td><td>1</td><td>2000</td></tr>
          </tbody>
        </table>
      </div>

      {/* Modal Azteca */}
      {showModal && (
        <div className="modal-azteca">
          <div className="modal-content">
            <h2>Te has rendido</h2>
            <p>Recupera fuerzas para volver con todo</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FaseBosque;