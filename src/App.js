import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      {location.pathname === "/" && <Navigate to="/signup" replace={true} />}
    </div>
  );
}

export default App;
