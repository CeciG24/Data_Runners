// src/components/NivelButton.jsx
import { useState } from "react";
export default function NivelButton({ numero, img, posicion, onClick, scale, shadowColor }) {
  const [hovered, setHovered] = useState(false);

  return (
    <img
      src={img}
      alt={`Nivel ${numero}`}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`absolute w-20 h-20 cursor-pointer hover:scale-170 transition-transform transform scale-150 duration-300 transition-filter`}
      style={{
        top: posicion.top,
        left: posicion.left,
        transform: `translate(-50%, -50%) scale(${scale})`,
                filter: hovered && shadowColor ? `drop-shadow(${shadowColor})` : "none",
      }}
    />
  );
}