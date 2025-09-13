// FaseMercado2.jsx
import React, { useState } from "react";
import "./FaseMercado.css"; // Reutilizamos el mismo CSS
import mercadoImg from "../assets/leopardo.png"; // reemplaza con otra imagen si quieres

const FaseMercado2 = ({ setFase }) => {
  const [showModal, setShowModal] = useState(false);

  const handleRendirse = () => {
    setShowModal(true);
    setTimeout(() => {
      setFase("mapa"); // vuelve al mapa
    }, 6000);
  };

  return (
    <div className="fase-mercado">
      {/* Columna izquierda */}
      <div className="fase-left">
        <img src={mercadoImg} alt="Mercado" className="tigre-sql" />
      </div>

      {/* Columna derecha */}
      <div className="fase-right">
        <header className="fase-header">
          <span className="fase-url">https://www.Data-runners.com</span>
          <span className="fase-points">Points: 0000456</span>
        </header>

        <div className="fase-nivel">
          <p>Mercado 2-1</p>
          <span>00:03:50</span>
        </div>

        <div className="fase-instrucciones">
          <p>
            En este nivel aprenderás sobre la organización de datos y cómo evitar desperdiciar memoria.
          </p>
          <ol>
            <li>Analiza los conjuntos de datos disponibles.</li>
            <li>Optimiza la consulta para reducir tiempo de respuesta.</li>
            <li>Identifica duplicados y limpia la tabla.</li>
            <li>Aplica tus habilidades para obtener el mejor puntaje.</li>
          </ol>
        </div>

        <textarea className="fase-query" placeholder="Escribe tu consulta SQL optimizada..."></textarea>

        <div className="fase-botones">
          <button>Consultar</button>
          <button>Optimizar</button>
          <button>Pista</button>
          <button onClick={handleRendirse}>Rendirse</button>
        </div>

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
            <tr><td>1</td><td>DataKing</td><td>5</td><td>1500</td></tr>
            <tr><td>2</td><td>QueryQueen</td><td>4</td><td>1320</td></tr>
            <tr><td>3</td><td>CodeFox</td><td>2</td><td>980</td></tr>
            <tr><td>4</td><td>ByteWolf</td><td>3</td><td>1120</td></tr>
            <tr><td>5</td><td>LeoPardo2</td><td>2</td><td>890</td></tr>
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="modal-azteca">
          <div className="modal-content">
            <h2>Te has rendido</h2>
            <p>Aprender a optimizar lleva tiempo, ¡vuelve más fuerte!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FaseMercado2;
