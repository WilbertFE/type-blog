import axios from "axios";
import { useEffect, useState } from "react";

export function useLogin() {
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(true);

  const checkLogin = async () => {
    try {
      await axios.get("http://localhost:6005/api/auth", {
        withCredentials: true,
      });
      setLogin(true);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      return console.error("Authentication Failed");
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return { login, loading };
}
