import { Button } from "@mui/material";
import styles from "./Register.module.css";
import TextField from "@mui/material/TextField";
const Register = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h1>Cadastre-se</h1>

        <TextField label="Email" type="email" name="email" />
        <TextField label="Senha" type="password" name="password" />
        <TextField
          label="Repita a senha"
          type="password"
          name="repeatPassword"
        />
        <Button variant="contained">Cadastrar</Button>
      </form>
    </div>
  );
};

export default Register;
