import React, { useState } from "react";
import "./FaseBosque.css";
import tigreImg from "../assets/leopardo.png"; // puedes cambiar la imagen si quieres otro personaje

const FaseBosque3 = () => {
  const [showModal, setShowModal] = useState(false);

  const handleRendirse = () => {
    setShowModal(true);
    setTimeout(() => {
      // Redirección al mapa principal
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
          <span className="fase-points">Points: 0000456</span>
        </header>

        {/* Nivel y tiempo */}
        <div className="fase-nivel">
          <p>Nivel 3-1</p>
          <span>00:01:12</span>
        </div>

        {/* Instrucciones */}
        <div className="fase-instrucciones">
          <p>
            Has llegado al tercer nivel del Bosque de Códigos. Aquí los retos son más complejos, así que prepárate.
          </p>
          <ol>
            <li>Lee cuidadosamente los problemas y contexto de cada batalla</li>
            <li>Escribe tu código en el área de query</li>
            <li>Observa la tabla de resultados a la derecha</li>
            <li>Usa el menú de abajo para consultar, habilidades, consejos o rendirte</li>
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

export default FaseBosque3;
