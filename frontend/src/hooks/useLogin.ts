import { UseLoginContext } from "@/contexts/useLogin.context";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

export function useLogin() {
  const { login, setLogin } = useContext(UseLoginContext);
  const [loading, setloading] = useState(true);

  const checkLogin = async () => {
    try {
      await axios.get("http://localhost:6005/api/auth", {
        withCredentials: true,
      });
      setLogin(true);
      setloading(false);
    } catch (err) {
      setloading(false);
      return console.error("Authentication Failed");
    }
  };

  useEffect(() => {
    if (login) {
      setloading(false);
    } else {
      checkLogin();
    }
  }, [login]);

  return { login, loading };
}
