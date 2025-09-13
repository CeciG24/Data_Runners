// FaseMercado3.jsx
import React, { useState } from "react";
import "./FaseMercado.css"; 
import mercadoImg from "../assets/leopardo.png"; // cambia si tienes otra imagen

const FaseMercado3 = ({ setFase }) => {
  const [showModal, setShowModal] = useState(false);

  const handleRendirse = () => {
    setShowModal(true);
    setTimeout(() => {
      setFase("mapa");
    }, 6000);
  };

  return (
    <div className="fase-mercado">
      {/* Izquierda */}
      <div className="fase-left">
        <img src={mercadoImg} alt="Mercado" className="tigre-sql" />
      </div>

      {/* Derecha */}
      <div className="fase-right">
        <header className="fase-header">
          <span className="fase-url">https://www.Data-runners.com</span>
          <span className="fase-points">Points: 0000678</span>
        </header>

        <div className="fase-nivel">
          <p>Mercado 3-1</p>
          <span>00:02:40</span>
        </div>

        <div className="fase-instrucciones">
          <p>
            Has llegado al reto final del Mercado de Memoria. Aquí pondrás a prueba todo lo aprendido.
          </p>
          <ol>
            <li>Resuelve problemas avanzados de optimización.</li>
            <li>Utiliza índices y claves para mejorar rendimiento.</li>
            <li>Minimiza el consumo de recursos en cada consulta.</li>
            <li>Demuestra tu maestría en el manejo de datos.</li>
          </ol>
        </div>

        <textarea className="fase-query" placeholder="Escribe tu consulta maestra..."></textarea>

        <div className="fase-botones">
          <button>Ejecutar</button>
          <button>Índice</button>
          <button>SuperPista</button>
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
            <tr><td>1</td><td>MasterSQL</td><td>8</td><td>2200</td></tr>
            <tr><td>2</td><td>OptimizerX</td><td>7</td><td>2050</td></tr>
            <tr><td>3</td><td>DataNinja</td><td>6</td><td>1980</td></tr>
            <tr><td>4</td><td>ByteMage</td><td>5</td><td>1740</td></tr>
            <tr><td>5</td><td>LeoPardo3</td><td>3</td><td>1200</td></tr>
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="modal-azteca">
          <div className="modal-content">
            <h2>Te has rendido</h2>
            <p>¡El reto final es duro, pero podrás lograrlo en tu próximo intento!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FaseMercado3;
