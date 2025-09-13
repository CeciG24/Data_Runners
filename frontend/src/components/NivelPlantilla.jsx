import React, { useState, useEffect } from "react";
import "./FaseBosque.css"; // puedes renombrar a FaseNivel.css para más claridad

 const NivelPlantilla = ({ nivelId, img, background, consejoTexto, tablaEjemplo }) => {
  const [showModal, setShowModal] = useState(false);
  const [nivel, setNivel] = useState(null);
  const [query, setQuery] = useState("");
  const [feedback, setFeedback] = useState("");
  const [consejo, setConsejo] = useState("");

  useEffect(() => {
    const fetchNivel = async () => {
      try {
        const res = await fetch(
          `https://datarunnersdeploy.onrender.com/niveles/${nivelId}`
        );
        const data = await res.json();
        setNivel(data.nivel);
      } catch (err) {
        console.error("Error cargando nivel:", err);
      }
    };

    fetchNivel();
  }, [nivelId]);

  const handleConsultar = async () => {
    try {
      const res = await fetch(
        `https://datarunnersdeploy.onrender.com/niveles/${nivelId}/resolver`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query_usuario: query }),
        }
      );

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
      window.location.href = "/map";
    }, 6000);
  };

  const handleConsejo = () => {
    setConsejo(consejoTexto);
  };

  return (
    <div className="fase-bosque"
          style={{
          backgroundImage: `url(${fondo})`,
        }}
    >
      {/* Columna izquierda */}
      <div className="fase-left">
        <img src={img} alt="Personaje SQL" className="tigre-sql" />
      </div>

      {/* Columna derecha */}
      <div className="fase-right">
        <header className="fase-header">
          <span className="fase-url">https://www.Data-runners.com</span>
          <span className="fase-points">Points: 0000123</span>
        </header>

        <div className="fase-nivel">
          <p>{nivel ? `Nivel ${nivel.id_nivel}` : "Cargando nivel..."}</p>
          <span>00:03:31</span>
        </div>

        <div className="fase-instrucciones">
          <p>{nivel ? nivel.enunciado : "Cargando instrucciones..."}</p>
        </div>

        <textarea
          className="fase-query"
          placeholder="Escribe tu query..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></textarea>

        <div className="fase-botones">
          <button onClick={handleConsultar}>Consultar</button>
          <button onClick={() => alert("⚡ Habilidad no implementada aún")}>
            Habilidad
          </button>
          <button onClick={handleConsejo}>Consejo</button>
          <button onClick={handleRendirse}>Rendirse</button>
        </div>

        {feedback && (
          <div className="fase-feedback">
            <p>{feedback}</p>
          </div>
        )}

        {consejo && (
          <div className="fase-consejo">
            <p>{consejo}</p>
          </div>
        )}

        {tablaEjemplo && (
          <table className="fase-tabla">
            <thead>
              <tr>
                {Object.keys(tablaEjemplo[0]).map((col, idx) => (
                  <th key={idx}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tablaEjemplo.map((row, idx) => (
                <tr key={idx}>
                  {Object.values(row).map((val, j) => (
                    <td key={j}>{val}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

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

export default NivelPlantilla;
