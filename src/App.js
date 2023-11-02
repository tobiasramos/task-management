import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/register/register";
import Home from "./pages/home/home";
import axios from "axios";
import Login from "./pages/login/login";
axios.defaults.baseURL = "http://localhost:3001/";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
