import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import background from "/background/fondo_inicio.png";
import buho from "/buho-robot.png";
import leopardo from "/leopardo.png";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [modalMessage, setModalMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleIngresar = async () => {
    // Mostrar mensaje de cargando
    setLoading(true);
    setModalMessage("Comprobando...");

    if (!email.trim() || !contraseña.trim()) {
      setLoading(false);
      setModalMessage("Llena todos los campos");
      return;
    }

    if (email.length < 3) {
      setLoading(false);
      setModalMessage("El usuario debe tener al menos 3 caracteres.");
      return;
    }

    try {
      const response = await fetch("https://datarunnersdeploy.onrender.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre: usuario, email: email, contraseña }),
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        setModalMessage(data.message);
        setTimeout(() => navigate("/roles"), 1500); // navega después de un tiempo corto
      } else {
        setModalMessage(data.error || "Error desconocido");
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
            <p className="text-white text-lg font-semibold">Bienvenido Data Runner...</p>
            </div>
        </div>

        <div className="bg-gray-900 shadow-xl rounded-xl p-8 w-96 text-center border border-purple-500 ">
            <h2 className="text-white text-2xl font-bold mb-6">Iniciar sesión</h2>

            <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-white w-full border p-2 mb-4 rounded "
            />

            <input
            type="password"
            placeholder="Contraseña"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            className="w-full text-white border p-2 mb-6 rounded"
            />

            <div className="flex row justify-center mb-5">
                <button
                    onClick={handleIngresar}
                    className="w-35 px-5 py-2 bg-purple-700 text-white text-xl rounded hover:bg-purple-500"
                    disabled={loading}
                >
                    Ingresar
                </button>
                </div>
                <div className="flex w-full text-white justify-center space-x-1">
                    <span>¿Eres nuevo?</span>
                    <Link to="/signup" className="text-purple-400 hover:text-purple-600 inline">
                        Regístrate
                    </Link>
                </div>
        </div>
    </div>
  );
}
