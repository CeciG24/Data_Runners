// FaseCiudad2.jsx
import React, { useState } from "react";
import "./FaseCiudad.css";
import ciudadImg from "../assets/leopardo.png"; // cambia por tu imagen de la ciudad

const FaseCiudad2 = ({ setFase }) => {
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
          <span className="fase-points">Points: 0000450</span>
        </header>

        <div className="fase-nivel">
          <p>Ciudad 2-1</p>
          <span>00:04:20</span>
        </div>

        <div className="fase-instrucciones">
          <p>
            Bienvenido a la segunda fase de la Ciudad de Datos. Aquí aplicarás tus conocimientos de SQL avanzado y optimización.
          </p>
          <ol>
            <li>Optimiza consultas complejas para grandes conjuntos de datos.</li>
            <li>Gestiona índices y claves para mejorar rendimiento.</li>
            <li>Verifica integridad referencial en múltiples tablas.</li>
            <li>Realiza joins y subconsultas para análisis avanzado.</li>
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
            <tr><td>6</td><td>DataTower</td><td>700</td><td>A</td></tr>
            <tr><td>7</td><td>ByteBlock</td><td>450</td><td>B</td></tr>
            <tr><td>8</td><td>SQLPlaza</td><td>600</td><td>A</td></tr>
            <tr><td>9</td><td>InfoHub</td><td>300</td><td>C</td></tr>
            <tr><td>10</td><td>CloudCenter</td><td>900</td><td>B</td></tr>
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="modal-azteca">
          <div className="modal-content">
            <h2>Te has rendido</h2>
            <p>¡Sigue practicando y dominarás la ciudad de datos!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FaseCiudad2;
