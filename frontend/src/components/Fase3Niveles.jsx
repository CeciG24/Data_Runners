// NivelPage.jsx
import { useParams } from "react-router-dom";
import tigreImg from "../assets/leopardo.png";
import buhoImg from "../assets/buho-robot.png";
import NivelPlantilla from "./NivelPlantilla";

const nivelesConfig = {
  1: {
    img: tigreImg.png,
    consejoTexto: "💡 Consejo: Usa SELECT nombre FROM guerreros;",
  },
  2: {
    img: buhoImg.png,
    consejoTexto: "💡 Consejo: Recuerda usar WHERE para filtrar datos.",
  }
};

const tablaEjemplo = [
  { id_jugador: 1, nombre: "Gian007", nivel: 5, puntaje: 1200 },
  { id_jugador: 2, nombre: "IanAG", nivel: 7, puntaje: 1800 },
  { id_jugador: 3, nombre: "Ceci1010", nivel: 3, puntaje: 1500 },
];

const background = "background/fondo_fase_3_plain.png";

export default function Fase3Niveles() {
  const { id } = useParams();
  const config = nivelesConfig[id];

  if (!config) return <h1>Nivel no encontrado</h1>;

  return (
    <NivelPlantilla
      nivelId={id}
      img={config.img}
      consejoTexto={config.consejoTexto}
      tablaEjemplo={tablaEjemplo}
      background={background}
    />
  );
}
