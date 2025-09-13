// FaseCiudad1.jsx
import React, { useState } from "react";
import "./FaseCiudad.css";
import ciudadImg from "../assets/leopardo.png"; // cambia por tu imagen de la ciudad

const FaseCiudad1 = ({ setFase }) => {
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
          <span className="fase-points">Points: 0000345</span>
        </header>

        <div className="fase-nivel">
          <p>Ciudad 1-1</p>
          <span>00:03:10</span>
        </div>

        <div className="fase-instrucciones">
          <p>
            Bienvenido a la primera fase de la Ciudad de Datos. Aquí deberás demostrar tus fundamentos de modelado.
          </p>
          <ol>
            <li>Identifica las entidades clave en un sistema urbano.</li>
            <li>Diseña relaciones correctas entre ellas.</li>
            <li>Normaliza las tablas para evitar redundancias.</li>
            <li>Prepara consultas básicas para validación de integridad.</li>
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
            <tr><td>1</td><td>TorreCentral</td><td>450</td><td>A</td></tr>
            <tr><td>2</td><td>ResidenciaSQL</td><td>300</td><td>B</td></tr>
            <tr><td>3</td><td>DataPlaza</td><td>800</td><td>A</td></tr>
            <tr><td>4</td><td>ByteHouse</td><td>120</td><td>C</td></tr>
            <tr><td>5</td><td>InfoTower</td><td>600</td><td>B</td></tr>
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="modal-azteca">
          <div className="modal-content">
            <h2>Te has rendido</h2>
            <p>¡La ciudad no se construyó en un día! Vuelve a intentarlo y serás un gran arquitecto de datos.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FaseCiudad1;
