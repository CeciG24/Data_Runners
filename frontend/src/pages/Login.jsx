import { useState } from "react";
import { useNavigate } from "react-router-dom";
import background from "/fondo_inicio.png";
import buho from "/buho-robot.png";
import leopardo from "/leopardo.png";


export default function Login() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleIngresar = () => {
        alert(`Ingresando con usuario: ${user}`);
    };

    const handleLimpiar = () => {
        setUser("");
        setPassword("");
    };

    function handleRegistrar() {
        // Validar usuario y contraseña

        // alert("Redirigir a pantalla de registro");
        navigate("/signup");s

    } 
    

    return (
        <div 
            className="flex flex-col h-screen w-screen justify-center items-center"
            style={{ backgroundImage: `url(${background})` }}
        >
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
            
        <div className="bg-gray-900 shadow-xl rounded-xl p-8 w-96 text-center border border-purple-500 ">
            <h2 className="text-white text-2xl font-bold mb-6">Login</h2>

            <input
                type="text"
                placeholder="Usuario / Email"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                className="text-white w-full border p-2 mb-4 rounded "
            />

            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full text-white border p-2 mb-6 rounded"
            />

            <div className="flex justify-between">
            <button
                onClick={handleIngresar}
                className="px-4 py-2 bg-purple-700 text-white rounded hover:bg-purple-500"
            >
                Ingresar
            </button>

            <button
                onClick={handleLimpiar}
                className="px-4 py-2 bg-purple-700  text-white rounded hover:bg-purple-500"
            >
                Limpiar
            </button>

            <button
                onClick={handleRegistrar}
                className="px-4 py-2 bg-purple-700 text-white rounded hover:bg-pruple-500"
            >
                Registrarse
            </button>
            </div>
        </div>
        </div>
    );
}