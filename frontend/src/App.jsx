import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartScreen from "./pages/startScreen";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Roles from "./pages/Roles";
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/roles" element={<Roles />} />
      </Routes>
    </Router>
  );
}

export default App;
