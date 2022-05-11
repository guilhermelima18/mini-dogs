import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useUser = () => {
  const state = useSelector((state) => state.user);
  const [user, setUser] = useState([]);

  function logOut() {
    localStorage.removeItem("mini-dogs.token");
    localStorage.removeItem("mini-dogs.user");
    window.location.reload();
  }

  function getUserStorage() {
    const getStorage = localStorage.getItem("mini-dogs.user");

    if (getStorage) {
      setUser([JSON.parse(getStorage)]);
    }

    return [];
  }

  useEffect(() => {
    getUserStorage();
  }, [state.data]);

  return {
    user,
    logOut,
  };
};
