import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthProvider, AuthContext } from "./AuthContext"; // 👈 correcto
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import StartScreen from "./pages/StartScreen";
import Roles from "./pages/Roles";
import Map from "./components/Map"

function AppRoutes() {
  const { user } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<StartScreen />} />

      <Route path="/login" element={<Login /> } />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/map" element={<Map />} />
      <Route path="/roles" element={<Roles />} />
      {/* <Route path="/nivel/:id" element={<NivelPage />} /> */}
      {/* <Route path="*" element={<Navigate to={user ? "/map" : "/login"} />} /> */}
    </Routes>

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
