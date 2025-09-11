// src/components/NivelButton.jsx
export default function NivelButton({ numero, img, posicion, onClick }) {
  return (
    <img
      src={img}
      alt={`Nivel ${numero}`}
      onClick={onClick}
      className="absolute w-20 h-20 cursor-pointer hover:scale-170 hover:drop-shadow-[0_0_15px_rgba(212,175,55,0.9)] transition-transform transform scale-150 duration-300"
      style={{ top: posicion.top, left: posicion.left }}
    />
  );
}