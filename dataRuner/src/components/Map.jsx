import "./Map.css";
import fondo from "../assets/fondo_pixelado.png";
import TextoMapa from "./TextoMapa.jsx";

function Map() {
  return (
    <div
      className="map-container"
      style={{
        backgroundImage: `url(${fondo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <TextoMapa texto="¡Bienvenido a Data Runner!" top="50%" left="10%" fontSize="48px" />
      <TextoMapa texto="Punto de inicio" top="100px" left="200px" color="yellow" />
    </div>
  );
}


export default Map;
