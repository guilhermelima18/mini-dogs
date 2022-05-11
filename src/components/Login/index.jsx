import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchLogin } from "../../store/Login/reducer";
import styles from "./styles.module.css";

export const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    if (inputName === "username") {
      setUsername(inputValue);
    }

    if (inputName === "password") {
      setPassword(inputValue);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (username !== "" && password !== "") {
      dispatch(fetchLogin({ username, password }));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <label className={styles.label} htmlFor="username">
          Usuário
        </label>
        <input
          className={styles.input}
          type="text"
          name="username"
          value={username}
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <div className="input-group">
        <label className={styles.label} htmlFor="password">
          Senha
        </label>
        <input
          className={styles.input}
          type="password"
          name="password"
          value={password}
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <button className={styles.button} type="submit">
        Entrar
      </button>
    </form>
  );
};
