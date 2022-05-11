import { useSelector } from "react-redux";
import { useUser } from "../../hooks/useUser";
import styles from "./styles.module.css";

export const Header = () => {
  const { user: userHook, logOut } = useUser();
  const { login, user } = useSelector((state) => state);
  const isLoading = login.loading || user.loading;

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Mini Dogs</h1>
      <button
        className={`${styles.login} ${isLoading ? styles.loading : ""} ${
          user.data ? styles.loaded : ""
        } ${userHook.length > 0 ? styles.loaded : ""}`}
        onClick={logOut}
      ></button>
    </header>
  );
};
