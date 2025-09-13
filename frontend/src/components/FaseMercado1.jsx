// FaseMercado1.jsx
import React, { useState } from "react";
import "./FaseMercado.css"; // puedes reutilizar el mismo CSS
import mercadoImg from "../assets/leopardo.png"; // reemplaza con la imagen que quieras

const FaseMercado1 = ({ setFase }) => {
  const [showModal, setShowModal] = useState(false);

  const handleRendirse = () => {
    setShowModal(true);
    setTimeout(() => {
      setFase("mapa"); // vuelve al mapa
    }, 6000);
  };

  return (
    <div className="fase-mercado">
      {/* Columna izquierda - Imagen/Avatar */}
      <div className="fase-left">
        <img src={mercadoImg} alt="Mercado" className="tigre-sql" />
      </div>

      {/* Columna derecha - Interfaz */}
      <div className="fase-right">
        {/* Header */}
        <header className="fase-header">
          <span className="fase-url">https://www.Data-runners.com</span>
          <span className="fase-points">Points: 0000321</span>
        </header>

        {/* Nivel y tiempo */}
        <div className="fase-nivel">
          <p>Mercado 1-1</p>
          <span>00:04:30</span>
        </div>

        {/* Instrucciones */}
        <div className="fase-instrucciones">
          <p>
            Bienvenido al Mercado de Memoria. Aquí aprenderás a optimizar el uso de datos y recursos.
          </p>
          <ol>
            <li>Lee los desafíos de memoria que se presentan.</li>
            <li>Resuelve los problemas en el área de código.</li>
            <li>Verifica tus resultados en la tabla de datos.</li>
            <li>Usa los botones para probar tus habilidades o pedir ayuda.</li>
          </ol>
        </div>

        {/* Área de query */}
        <textarea className="fase-query" placeholder="Escribe tu consulta o estrategia..."></textarea>

        {/* Botones */}
        <div className="fase-botones">
          <button>Consultar</button>
          <button>Habilidad</button>
          <button>Consejo</button>
          <button onClick={handleRendirse}>Rendirse</button>
        </div>

        {/* Tabla */}
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
            <tr><td>1</td><td>Gian007</td><td>2</td><td>800</td></tr>
            <tr><td>2</td><td>IanAG</td><td>3</td><td>950</td></tr>
            <tr><td>3</td><td>Ceci1010</td><td>1</td><td>700</td></tr>
            <tr><td>4</td><td>Val</td><td>4</td><td>1200</td></tr>
            <tr><td>5</td><td>LeoPardo1</td><td>1</td><td>850</td></tr>
          </tbody>
        </table>
      </div>

      {/* Modal */}
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

export default FaseMercado1;
