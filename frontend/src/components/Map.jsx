import React, { useState } from "react";
import "./Map.css";
import fondo from "../assets/fondo_pixelado.png";
import Arboles from "./Arboles.jsx";
import Chozas from "./Chozas.jsx";
import TextoMapa from "./TextoMapa.jsx";
import Procesador from "./Fases/procesador.jsx";
import BosqueCodigo from "./Fases/BosqueCodigo.jsx";
import DistritoDatos from "./Fases/DistritoDatos.jsx";
import MercadoMemoria from "./Fases/MercadoMemoria.jsx";
import CiudadCoyolxaum from "./Fases/CiudadCoyolxaum.jsx";
import BotonMapa from "./BotonMapa";
import RutaMapa from "./Fases/RutaMapa.jsx";
import RutaMapaSecundaria from "./Fases/RutaMapaSecundaria.jsx";
import FaseBosque from "./FaseBosque.jsx";
import FaseBosque2 from "./FaseBosque2.jsx";
import FaseBosque3 from "./FaseBosque3.jsx";
import FaseDistrito1 from "./FaseDistrito1.jsx";
import FaseDistrito2 from "./FaseDistrito2.jsx";
import FaseDistrito3 from "./FaseDistrito3.jsx";
import FaseMercado1 from "./FaseMercado1.jsx";
import FaseMercado2 from "./FaseMercado2.jsx";
import FaseMercado3 from "./FaseMercado3.jsx";
import FaseCiudad1 from "./FaseCiudad1.jsx";
import FaseCiudad2 from "./FaseCiudad2.jsx";
import FaseCiudad3 from "./FaseCiudad3.jsx";
import MapaBosque from "./MapaBosque.jsx";
import MapaDistritos from "./MapaDistritos.jsx";
import WikiBosque1 from "./WikiBosque1.jsx";
import Fase3 from "../pages/Fase3.jsx";
import Fase4 from "../pages/Fase4.jsx";

// Coordenadas de ejemplo
const puntosRuta = [
  { x: 675, y: 420 }, 
  { x: 675, y: 260 }, 
  { x: 600, y: 220 },
  { x: 560, y: 220 },
  { x: 530, y: 220 },
  { x: 400, y: 220 },
  { x: 340, y: 220 },
  { x: 290, y: 240 },
  { x: 270, y: 300 },
  { x: 270, y: 580 },
  { x: 270, y: 600 },
  { x: 340, y: 610 },
  { x: 360, y: 615 },
  { x: 390, y: 615 },
  { x: 600, y: 615 }, 
  { x: 890, y: 615 },
  { x: 920, y: 605 },
  { x: 930, y: 590 },
  { x: 940, y: 575 },
  { x: 940, y: 550 },
];

// Generar posiciones aleatorias
const generarArboles = (cantidad) =>
  Array.from({ length: cantidad }, () => ({
    x: Math.floor(Math.random() * window.innerWidth),
    y: Math.floor(Math.random() * window.innerHeight),
    scale: 6,
  }));

const generarChozas = (cantidad) =>
  Array.from({ length: cantidad }, () => ({
    x: Math.floor(Math.random() * (window.innerWidth - 100)),
    y: Math.floor(Math.random() * (window.innerHeight - 100)),
    scale: 5,
  }));

const arbolesData = generarArboles(15);
const chozasData = generarChozas(10);

function Map() {
  const [fase, setFase] = useState("mapa"); // Estado de la fase actual

  // Renderizar la fase seleccionada
  if (fase === "mapaBosque") return <MapaBosque setFase={setFase} />;
  if (fase === "mapaDistrito") return <MapaDistritos setFase={setFase} />;
  if (fase === "mapaMercado") return <Fase3 setFase={setFase} />
  if (fase === "coyalxuh") return <Fase4 setFase={setFase} />
  if (fase === "faseBosque") return <FaseBosque setFase={setFase} />; // Nivel 1
  if (fase === "faseBosque2") return <FaseBosque2 setFase={setFase} />; // Nivel 2
  if (fase === "faseBosque3") return <FaseBosque3 setFase={setFase} />; // Nivel 3
  if (fase === "wiki1") return <WikiBosque1 setFase={setFase} />;
  if (fase === "distrito1") return <FaseDistrito1 setFase={setFase} />
  if (fase === "distrito2") return <FaseDistrito2 setFase={setFase} />
  if (fase === "distrito3") return <FaseDistrito3 setFase={setFase} />
  if (fase === "distrito") return <DistritoDatos setFase={setFase} />;
  if (fase === "mercado") return <MercadoMemoria />;
  if (fase === "faseMercado1") return <FaseMercado1 setFase={setFase} />;
  if (fase === "faseMercado2") return <FaseMercado2 setFase={setFase} />;
  if (fase === "faseMercado3") return <FaseMercado3 setFase={setFase} />;
  if (fase === "ciudad") return <CiudadCoyolxaum />;
  if (fase === "faseCiudad1") return <FaseCiudad1 setFase={setFase} />;
  if (fase === "faseCiudad2") return <FaseCiudad2 setFase={setFase} />;
  if (fase === "faseCiudad3") return <FaseCiudad3 setFase={setFase} />



  // Vista principal del mapa
  return (
    <div
      className="map-container"
      style={{
        backgroundImage: `url(${fondo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh",
        position: "relative",
      }}
    >
      {/* Rutas */}
      <RutaMapaSecundaria puntos={puntosRuta} color="#0044ff" grosor={25} />
      <RutaMapa puntos={puntosRuta} color="#0ff" grosor={12} />

      {/* Elementos del mapa */}
      <Procesador top="340px" left="600px" scale={5} />
      <BosqueCodigo top="100px" left="350px" scale={5} />
      <DistritoDatos top="500px" left="210px" scale={5} />
      <MercadoMemoria top="520px" left="565px" scale={5} />
      <CiudadCoyolxaum top="300px" left="850px" scale={5} />

      {/* Textos */}
      <TextoMapa
        texto="¡Bienvenido a Data Runner!"
        top="5%"
        left="10%"
        fontSize="38px"
        color="#0cc"
      />
      <TextoMapa
        texto="Base del Hacker"
        top="63%"
        left="44%"
        fontSize="18px"
        color="#0cc"
      />

      {/* Árboles y chozas */}
      {arbolesData.map((a, i) => (
        <Arboles key={`arbol-${i}`} x={a.x} y={a.y} scale={a.scale} />
      ))}
      {chozasData.map((c, i) => (
        <Chozas key={`choza-${i}`} x={c.x} y={c.y} scale={c.scale} />
      ))}

      {/* Botones de fases */}
      <BotonMapa
        texto="Bosque de códigos"
        top="265px"
        left="360px"
        onClick={() => setFase("mapaBosque")}
      />
      <BotonMapa
        texto="Distrito de datos"
        top="660px"
        left="225px"
        onClick={() => setFase("mapaDistrito")}
      />
      <BotonMapa
        texto="Mercado de memoria"
        top="670px"
        left="630px"
        onClick={() => setFase("mapaMercado")}
      />
      <BotonMapa
        texto="Coyalxuh Bot"
        top="480px"
        left="876px"
        onClick={() => setFase("coyalxuh")}
      />
    </div>
  );
}

export default Map;
