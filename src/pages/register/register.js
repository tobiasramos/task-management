import { Button } from "@mui/material";
import styles from "./Register.module.css";
import TextField from "@mui/material/TextField";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
    repeat_password: "",
  });

  const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/;

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      regexEmail.test(user.email) &&
      regexPassword.test(user.password) &&
      user.password === user.repeat_password
    ) {
      axios
        .post("/register", user)
        .then((response) => window.alert(response.data.message))
        .catch((response) => window.alert(response.data.message));
      navigate("/login");
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1>Cadastre-se</h1>

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
        <TextField
          id="outlined-basic"
          variant="outlined"
          label="Repita a senha"
          type="password"
          name="repeat_password"
          value={user.repeat_password}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained">
          Cadastrar
        </Button>

        <div className={styles.instructionContainer}>
          <div
            className={`${styles.instruction} ${
              regexEmail.test(user.email) ? styles.success : ""
            }`}
          >
            Seu nome de usuário deve ser um e-mail.
          </div>

          <div
            className={`${styles.instruction} ${
              regexPassword.test(user.password) ? styles.success : ""
            }`}
          >
            A senha deve conter pelo menos um número, uma letra maiúscula e uma
            letra minúscula e não deve ter mais de 10 caracteres.
          </div>

          <div
            className={`${styles.instruction} ${
              user.password && user.password === user.repeat_password
                ? styles.success
                : ""
            }`}
          >
            As senhas devem ser as iguais.
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
