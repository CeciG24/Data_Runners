// src/pages/Roles.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import background from "/background/fondo_inicio.png"


const roles = [
  { id: 1, name: "Guerrero", img: "/roles/Guerrero.png" },
  { id: 2, name: "Guerrero_Lobo", img: "/roles/Guerrero2.png" },
  { id: 3, name: "Comerciante", img: "/roles/Comerciante.png" },
  { id: 4, name: "Sacerdote", img: "/roles/Sacerdote.png" },
];

export default function Roles() {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const handleSelect = (roleId) => {
    setSelected(roleId);
  };

  const handleConfirm = async () => {
    if (!selected) return alert("Selecciona un rol antes de continuar");

    // Aquí harías un fetch al backend Flask para guardar el rol
    try {
        const res = await fetch("https://datarunnersdeploy.onrender.com/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ roleId: selected }),
      });

      const data = await res.json();
      console.log(data);
      
      if (res.ok) {
        navigate("/home"); // manda al usuario a la página principal
      } else {
        alert("Error al guardar el rol");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div 
        className="h-screen w-screen flex flex-col justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${background})` }}
    >
      <h1 className="text-6xl text-gray-400 font-bold mb-15">Elige a tu personaje</h1>
      <div className="grid grid-cols-2 gap-30">
        {roles.map((role) => (
          <div
            key={role.id}
            className="relative cursor-pointer"
            onClick={() => handleSelect(role.id)}
            onMouseEnter={() => setSelected(role.id)}
          >
            {/* Imagen del rol */}
            <img
              src={role.img}
              alt={role.name}
              className={`w-40 h-40 rounded-lg shadow-lg transform scale-150 transition-transform mb-5${
                selected === role.id ? "scale-105 border-4 border-purple-700" : ""
              }`}
            />
            {/* Flecha encima*/}
            {selected === role.id && (
              <div className="absolute -top-18  left-1/2 transform -translate-x-1/2">
                <span className="text-4xl">⬇</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={handleConfirm}
        className="w-45 h-15 px-5 py-3 bg-purple-700 text-white text-center rounded hover:bg-purple-500 text-2xl mt-10"
      >
        Confirmar
      </button>
    </div>
  );
}
