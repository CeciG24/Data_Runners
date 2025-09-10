import { useNavigate } from "react-router-dom";
import background from "/fondo_inicio.png";
import logo from "/data_runners-logo.png";

export default function StartScreen() {
  const navigate = useNavigate();

  return (
    <div
      className="h-screen w-screen flex flex-col justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <img src={logo} alt="Logo" className="w-[40vw]" />
      <button
        className="w-45 h-15 px-5 py-3 bg-purple-700 text-white rounded hover:bg-purple-500 text-3xl"
        onClick={() => navigate("/login")}
      >
        Start
      </button>
    </div>
  );
}
