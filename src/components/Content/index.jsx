import { useSelector } from "react-redux";
import { useUser } from "../../hooks/useUser";
import { Loading } from "../Loading";
import { Login } from "../Login";
import { Photos } from "../Photos";

export const Content = () => {
  const { user: userHook } = useUser();
  const { login, user } = useSelector((state) => state);

  const isLoading = login.loading || user.loading;

  if (isLoading) return <Loading />;

  return <div>{userHook.length > 0 ? <Photos /> : <Login />}</div>;
};
