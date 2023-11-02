import styles from "./Login.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { login } from "../../redux/actions";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState("");

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user.email || !user.password) {
      setErrors("Por favor preencha todos os campos.");
      return;
    }

    if (user.email && user.password) {
      axios
        .post("/login", user)
        .then(({ data }) => {
          if (data) {
            const { access } = data; // Removendo 'id'
            access && dispatch(login(data));
            navigate("/home");
          }
        })
        .catch((error) => {
          if (error.response) {
            setErrors("Senha ou email incorretos.");
          } else {
            console.log(error);
          }
        });
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1>Login</h1>
        <TextField
          id="outlined-basic"
          variant="outlined"
          label="Email"
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          variant="outlined"
          label="Senha"
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />

        <div className={styles.errorContainer}>
          {errors && <p className={styles.error}>{errors}</p>}
        </div>

        <Button type="submit" variant="contained">
          Login
        </Button>
        <Link to={"/register"}>Cadastrar-se</Link>
      </form>
    </div>
  );
};

export default Login;
