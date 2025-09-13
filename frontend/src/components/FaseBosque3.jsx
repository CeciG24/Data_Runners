import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./FaseBosque.css";
import tigreImg from "../assets/leopardo.png";
const FaseBosque3 = ({ setFase }) => {
  const [showModal, setShowModal] = useState(false);
  const [tabla, setTabla] = useState(null);
  const [query, setQuery] = useState("");
  const [nivel, setNivel] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [salidaEsperada, setSalidaEsperada] = useState("");
  const [consejo, setConsejo] = useState(""); // 🔹 consejo mostrado
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNivel = async () => {
      try {
        const res = await fetch("https://datarunnersdeploy.onrender.com/niveles/3");
        const data = await res.json();
        setNivel(data.nivel);
      } catch (err) {
        console.error("Error cargando nivel:", err);
      }
    };
    const fetchTabla = async () => {
      try {
        const res = await fetch("https://datarunnersdeploy.onrender.com/niveles/tabla/3");
        const data = await res.json();
        setTabla(data.tabla);
      } catch (err) {
        console.error("Error cargando tabla:", err);
      }
    };
    fetchTabla();
    fetchNivel();
  }, []);

  const [nivelCompletado, setNivelCompletado] = useState(false);
  
  const handleConsultar = async () => {
    try {
      const res = await fetch(`https://datarunnersdeploy.onrender.com/niveles/3/resolver`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query_usuario: query }),
      });
  
      const data = await res.json();
      setFeedback(data.feedback || "Error procesando la respuesta");
      setSalidaEsperada(data.salida_esperada || "");
  
      // 🔹 Habilitar botón siguiente nivel
      const correcto = data.feedback !== "La consulta no es correcta, intenta de nuevo";
      setNivelCompletado(correcto);
  
    } catch (err) {
      console.error("Error al enviar consulta:", err);
      setFeedback("Error de conexión con el servidor");
    }
  };
  // 🔹 Consejo hardcodeado para el nivel 1
  const handleConsejo = () => {
    setConsejo("💡 La tabla que contiene a los líderes se llama aliados. Necesitas usar SELECT y WHERE");
  };

  const handleRendirse = () => {
    setShowModal(true);
    setTimeout(() => {
      setFase("mapa");
    }, 6000);
  };

  return (
        <div className="fase-bosque">
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
  
            {/* Salida esperada */}
            {salidaEsperada && (
              <div className="fase-salida">
                <h4>✅ Salida:</h4>
                <pre>{salidaEsperada}</pre>
              </div>
            )}
  
            {/* Consejo mostrado */}
            {consejo && (
              <div className="fase-consejo">
                <p>{consejo}</p>
              </div>
            )}
  
            {tabla && (
  <table className="fase-tabla">
    <thead>
      <tr>
        {(Array.isArray(tabla.esquema)
          ? tabla.esquema
          : typeof tabla.esquema === "string"
            ? tabla.esquema.split(",")
            : []
        ).map((col, index) => (
          <th key={index}>{col.split(" ")[0]}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {(
        Array.isArray(tabla.datos)
          ? tabla.datos
          : typeof tabla.datos === "string"
            ? JSON.parse(tabla.datos)
            : []
      ).map((fila, i) => (
        <tr key={i}>
          {fila.map((celda, j) => (
            <td key={j}>{celda}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
        )}
        {/* Botón Siguiente Nivel */}
          {nivelCompletado && (
            <button
              className="bg-[#4CAF50] text-white text-xl px-4 py-3 hover:bg-[#257a28] transition-colors"
              onClick={() => setFase("faseDistrito1")} // Cambiar según el siguiente nivel
            >
              Siguiente Nivel ➡
            </button>
          )}

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

export default FaseBosque3;