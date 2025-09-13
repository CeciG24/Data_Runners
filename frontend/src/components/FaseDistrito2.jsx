// FaseDistrito2.jsx
import React, { useState } from "react";
import "./FaseDistrito.css";
import tigreImg from "../assets/leopardo.png"; // puedes cambiar la imagen si quieres

const FaseDistrito2 = ({ setFase }) => {
  const [showModal, setShowModal] = useState(false);

  const handleRendirse = () => {
    setShowModal(true);
    setTimeout(() => {
      setFase("mapa"); // vuelve al mapa
    }, 6000);
  };

  return (
    <div className="fase-distrito">
      <div className="fase-left">
        <img src={tigreImg} alt="Tigre SQL" className="tigre-sql" />
      </div>

      <div className="fase-right">
        <header className="fase-header">
          <span className="fase-url">https://www.Data-runners.com</span>
          <span className="fase-points">Points: 0000789</span>
        </header>

        <div className="fase-nivel">
          <p>Distrito 2-1</p>
          <span>00:05:12</span>
        </div>

        <div className="fase-instrucciones">
          <p>
            Bienvenido al Distrito de Análisis. Aquí aprenderás consultas y
            filtrado avanzado de datos.
          </p>
          <ol>
            <li>Lee el contexto y los problemas que se presentan.</li>
            <li>Escribe tus consultas en el área de código.</li>
            <li>Consulta la tabla de datos para verificar resultados.</li>
            <li>Usa los botones para probar tu consulta, habilidades o pedir ayuda.</li>
          </ol>
        </div>

        <textarea className="fase-query" placeholder="Escribe tu query..."></textarea>

        <div className="fase-botones">
          <button>Consultar</button>
          <button>Habilidad</button>
          <button>Consejo</button>
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
            <tr><td>1</td><td>Gian007</td><td>6</td><td>1500</td></tr>
            <tr><td>2</td><td>IanAG</td><td>8</td><td>2000</td></tr>
            <tr><td>3</td><td>Ceci1010</td><td>4</td><td>1700</td></tr>
            <tr><td>4</td><td>Val</td><td>11</td><td>3200</td></tr>
            <tr><td>5</td><td>LeoPardo1</td><td>2</td><td>2100</td></tr>
          </tbody>
        </table>
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

export default FaseDistrito2;
