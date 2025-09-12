import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import background from "/background/fondo_inicio.png";
import buho from "/buho-robot.png";
import leopardo from "/leopardo.png";



export default function SignUp() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    contraseña: "",
  });
  const [modalMessage, setModalMessage] = useState(null);
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegistrar = async () => {
    const { nombre, email, contraseña } = formData;
    setLoading(true);
    setModalMessage("Registrando...");

    // Validaciones básicas
    if (!nombre.trim() || !email.trim() || !contraseña.trim()) {
      setLoading(false);
      setModalMessage("Todos los campos son obligatorios");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setLoading(false);
      setModalMessage("El email no es válido.");
      return;
    }

    try {
    const response = await fetch("https://datarunnersdeploy.onrender.com/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
    });

    const data = await response.json();
    console.log(data);
    if (response.ok) {
        setModalMessage(data.message);
        setTimeout(() => navigate("/login"), 2500);
    } else if (data.error!=null){
        setModalMessage(data.error);
    }
    } catch (error) {
      setModalMessage("Error de conexión con el servidor");
    } finally {
      setLoading(false);
    }
};

  return (
    <div 
        className="flex flex-col h-screen w-screen justify-center items-center"
        style={{ backgroundImage: `url(${background})` }}
    >
      <Modal 
        isOpen={modalMessage}
        onClose={() => setModalMessage(null)}
        modalMessage={modalMessage}
        loading={loading}
      />
        <div className="relative w-[30rem] mb-8">
            <img
                src={buho}
                alt="Buho Robótico"
                className="absolute left-[-5rem] top-1/2 transform scale-200 -translate-y-1/2 w-24 z-10 pointer-events-none object-contain"

            />
            <img 
                src={leopardo}
                alt="Guepardo"
                className="absolute right-[-5rem] top-1/2 transform scale-170 -translate-y-1/2 w-24 z-10 pointer-events-none"
            />
            <div className="bg-gray-900 rounded-xl p-4 text-center border border-purple-500 z-5 relative">
                <p className="text-white text-lg font-semibold"> 
                    Bienvenido Data Runner...
                </p>
            </div>
        </div>
        <div className="flex flex-col bg-gray-900 shadow-xl rounded-xl p-8 w-96 text-center border border-purple-500 ">
            <h2 className="text-white text-2xl font-bold mb-6">Registro</h2>

            <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="text-white w-full border p-2 mb-4 rounded "
            />

            <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                value={formData.email}
                onChange={handleChange}
                className="text-white w-full border p-2 mb-4 rounded "
            />

            <input
                type="password"
                name="contraseña"
                placeholder="Contraseña"
                value={formData.contraseña}
                onChange={handleChange}
                className="text-white w-full border p-2 mb-4 rounded "
            />
            <div className="flex row justify-center mb-4">
              <button
                  onClick={handleRegistrar}
                  className="w-35 px-5 py-2 bg-purple-700 text-white text-xl rounded hover:bg-purple-500"
                  disabled={loading}
              >
                  Registrar
              </button>
            </div>
            <div className="flex w-full text-white justify-start space-x-1">
                <Link to="/login" className="text-purple-400 hover:text-purple-600 inline">
                  Iniciar sesión
                </Link>
            </div>
        </div>  
      </div>
  );
}
