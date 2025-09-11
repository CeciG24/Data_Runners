import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthProvider, AuthContext } from "./AuthContext"; // 👈 correcto
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import StartScreen from "./pages/StartScreen";
import Roles from "./pages/Roles";
import Map from "./components/Map"
import Fase3 from "./pages/Fase3";
import Fase4 from "./pages/Fase4";

function AppRoutes() {
  const { user } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<StartScreen />} />

      <Route path="/login" element={!user ? <Login /> : <Navigate to="/map" />} />
      <Route path="/signup" element={!user ? <SignUp /> : <Navigate to="/map" />} />
      <Route path="/map" element={<Map />} />
      <Route path="/roles" element={<Roles />} />

      <Route path="*" element={<Navigate to={user ? "/map" : "/login"} />} />
    </Routes>

      // <Route path="/map" element={user ? <Map /> : <Navigate to="/login" />} />

  );
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}
