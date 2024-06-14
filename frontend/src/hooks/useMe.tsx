import { useEffect, useState } from "react";
import { UserInterface } from "@/types";

export const useMe = () => {
  const [user, setUser] = useState<null | UserInterface>(null);
  const [loading, setLoading] = useState(true);

  const getUserData = async () => {
    const response = await fetch("http://localhost:6005/api/users/me", {
      method: "GET",
      credentials: "include",
    });
    if (response.status !== 200) {
      setUser(null);
      setLoading(false);
      return;
    }
    const result = await response.json();
    setUser(result.data);
    setLoading(false);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return { user, loading };
};
