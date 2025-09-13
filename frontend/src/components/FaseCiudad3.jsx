// FaseCiudad3.jsx
import React, { useState } from "react";
import "./FaseCiudad.css";
import ciudadImg from "../assets/leopardo.png"; // cambia por tu imagen de la ciudad

const FaseCiudad3 = ({ setFase }) => {
  const [showModal, setShowModal] = useState(false);

  const handleRendirse = () => {
    setShowModal(true);
    setTimeout(() => {
      setFase("mapa");
    }, 6000);
  };

  return (
    <div className="fase-ciudad">
      {/* Izquierda */}
      <div className="fase-left">
        <img src={ciudadImg} alt="Ciudad" className="tigre-sql" />
      </div>

      {/* Derecha */}
      <div className="fase-right">
        <header className="fase-header">
          <span className="fase-url">https://www.Data-runners.com</span>
          <span className="fase-points">Points: 0000580</span>
        </header>

        <div className="fase-nivel">
          <p>Ciudad 3-1</p>
          <span>00:05:15</span>
        </div>

        <div className="fase-instrucciones">
          <p>
            Bienvenido a la tercera fase de la Ciudad de Datos. Esta es la etapa de maestría: integración y análisis avanzado.
          </p>
          <ol>
            <li>Diseña procedimientos almacenados complejos.</li>
            <li>Aplica triggers y reglas de negocio.</li>
            <li>Implementa vistas y agregaciones para reportes.</li>
            <li>Optimiza toda la base de datos para consultas masivas.</li>
          </ol>
        </div>

        <textarea className="fase-query" placeholder="Escribe tu consulta de prueba..."></textarea>

        <div className="fase-botones">
          <button>Ejecutar</button>
          <button>Índice</button>
          <button>SuperPista</button>
          <button onClick={handleRendirse}>Rendirse</button>
        </div>

        <table className="fase-tabla">
          <thead>
            <tr>
              <th>id_edificio</th>
              <th>nombre</th>
              <th>habitantes</th>
              <th>zona</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>11</td><td>MasterTower</td><td>1000</td><td>A</td></tr>
            <tr><td>12</td><td>DataSquare</td><td>850</td><td>B</td></tr>
            <tr><td>13</td><td>SQLCity</td><td>950</td><td>A</td></tr>
            <tr><td>14</td><td>InfoPlaza</td><td>700</td><td>C</td></tr>
            <tr><td>15</td><td>CloudHub</td><td>1200</td><td>B</td></tr>
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="modal-azteca">
          <div className="modal-content">
            <h2>Te has rendido</h2>
            <p>¡No te preocupes! La ciudad más grande requiere paciencia y estrategia.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FaseCiudad3;
