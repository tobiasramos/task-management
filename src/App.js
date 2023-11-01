import "./App.css";
import Register from "./pages/register/register";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001/";

function App() {
  return (
    <div className="App">
      <Register/>
    </div>
  );
}

export default App;
