import styles from "./Login.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h1>Login</h1>
        <TextField
          id="outlined-basic"
          variant="outlined"
          label="Email"
          type="email"
          name="email"
        />
        <TextField
          id="outlined-basic"
          variant="outlined"
          label="Senha"
          type="password"
          name="password"
        />

        <Button type="submit" variant="contained">
          Login
        </Button>
        <Link to={"/register"}>Cadastrar-se</Link>
      </form>
    </div>
  );
};

export default Login;
