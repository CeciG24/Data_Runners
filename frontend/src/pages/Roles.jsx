import { useState } from "react";
import { useNavigate } from "react-router-dom";
import background from "/background/fondo_inicio.png";
import Modal from "../components/Modal";

const roles = [
  { id: 1, name: "Itzcóatl", img: "/roles/Itzcóatl.png" },
  { id: 2, name: "Cuauhtli", img: "/roles/Cuauhtli.png" },
  { id: 3, name: "Xólotl", img: "/roles/Xólotl.png" },
  { id: 4, name: "Tecuaní", img: "/roles/Tecuaní.png" },
];

export default function Roles() {
  const [selected, setSelected] = useState(null);
  const [hovered, setHovered] = useState(null);
  const [modalMessage, setModalMessage] = useState(null);
  const navigate = useNavigate();

  const handleConfirm = async() => {

    if (!selected)
      setModalMessage("Selecciona un rol");
    else {
      console.log(selected);

      try {
          const response = await fetch("https://datarunnersdeploy.onrender.com/users/rol", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id_rol: selected }),
          });

          const data = await response.json();
          console.log(data);

          if (response.ok) {
            setModalMessage(data.message);
            setTimeout(() => navigate("/map"), 1500); // navega después de un tiempo corto
          } else {
            setModalMessage(data.error || "Error desconocido");
          }
        } catch (error) {
          setModalMessage("Error de conexión con el servidor");
        }
    }

  };

  return (
    <div 
      className="h-screen w-screen flex flex-col justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Modal 
        isOpen={modalMessage}
        onClose={() => setModalMessage(null)}
        modalMessage={modalMessage}
        loading={false}
      />
      <h1 className="text-6xl text-gray-400 font-bold mb-15">Elige a tu personaje</h1>
      
      <div className="grid grid-cols-2 gap-30">
        {roles.map((role) => {

          return (
            <div
              key={role.id}
              className="relative cursor-pointer"
              onClick={() => setSelected(role.id)}
              onMouseEnter={() => setHovered(role.id)}
              onMouseLeave={() => setHovered(null)}
            >


              {/* Imagen del rol */}
              <img
                src={role.img}
                alt={role.name}
                className={`w-40 h-40 rounded-lg shadow-lg transform scale-120 transition-transform mb-5 ${
                  selected === role.id ? "scale-150 border-4 border-purple-700" : ""} 
                  ${ hovered === role.id ? "border-4 border-purple-700" : ""
                }`}
              />

              {/* Flecha encima si está seleccionado */}
              {selected === role.id && (
                <div className="absolute -top-18 left-1/2 transform -translate-x-1/2">
                  <span className="text-4xl">⬇</span>
                </div>
              )}
            </div>
          );
        })}
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
