import React, { useState } from "react";
import "./FaseBosque.css";
import tigreImg from "../assets/leopardo.png";

const FaseBosque = () => {
  const [showModal, setShowModal] = useState(false);

  const handleRendirse = () => {
    setShowModal(true);
    setTimeout(() => {
      // Redirección sin react-router
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
          <span className="fase-points">Points: 0000123</span>
        </header>

        {/* Nivel y tiempo */}
        <div className="fase-nivel">
          <p>Nivel 1-1</p>
          <span>00:03:31</span>
        </div>

        {/* Instrucciones */}
        <div className="fase-instrucciones">
          <p>
            Antes de empezar tienes que conocer lo básico, en esta parte
            aprenderás los conceptos básicos y lo necesario para tu aventura
          </p>
          <ol>
            <li>En esta parte se mostrarán problemas, comentarios o contexto para tus batallas</li>
            <li>Podrás escribir tu código en el apartado izquierdo</li>
            <li>Del lado derecho tendrás la tabla para que puedas apreciar los datos de mejor manera</li>
            <li>Abajo tienes un menú para probar tu consulta, usar habilidades, pedir ayuda o rendirte</li>
          </ol>
        </div>

        {/* Área de query */}
        <textarea className="fase-query" placeholder="Escribe tu qwery..."></textarea>

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

export default FaseBosque;
