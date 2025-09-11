import React, { useState } from "react";
import "./FaseBosque.css";
import tigreImg from "../assets/leopardo.png";

const FaseBosque2 = () => {
  const [showModal, setShowModal] = useState(false);

  const handleRendirse = () => {
    setShowModal(true);
    setTimeout(() => {
      // Redirección al mapa
      window.location.href = "/map"; 
    }, 6000);
  };

  return (
    <div className="fase-bosque">
      {/* Columna izquierda - Tigre */}
      <div className="fase-left">
        <img src={tigreImg} alt="Tigre SQL" className="tigre-sql" />
      </div>

      {/* Columna derecha - Interfaz */}
      <div className="fase-right">
        {/* Encabezado */}
        <header className="fase-header">
          <span className="fase-url">https://www.Data-runners.com</span>
          <span className="fase-points">Points: 0000245</span>
        </header>

        {/* Nivel y tiempo */}
        <div className="fase-nivel">
          <p>Nivel 2-1</p>
          <span>00:00:00</span>
        </div>

        {/* Instrucciones */}
        <div className="fase-instrucciones">
          <p>
            Bienvenido al segundo nivel. Aquí se complican las cosas, prepárate para retos más desafiantes.
          </p>
          <ol>
            <li>Resolverás consultas más complejas y con más datos</li>
            <li>Utiliza las habilidades de tu personaje sabiamente</li>
            <li>La tabla de la derecha te ayudará a analizar los resultados</li>
            <li>Prueba tus consultas antes de enviarlas o pide ayuda si lo necesitas</li>
          </ol>
        </div>

        {/* Área de query */}
        <textarea className="fase-query" placeholder="Escribe tu query..."></textarea>

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
            <tr><td>1</td><td>Gian007</td><td>6</td><td>1400</td></tr>
            <tr><td>2</td><td>IanAG</td><td>8</td><td>2100</td></tr>
            <tr><td>3</td><td>Ceci1010</td><td>4</td><td>1700</td></tr>
            <tr><td>4</td><td>Val</td><td>11</td><td>3200</td></tr>
            <tr><td>5</td><td>LeoPardo1</td><td>2</td><td>2500</td></tr>
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

export default FaseBosque2;
