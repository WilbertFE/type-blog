import { useState, useEffect } from "react";
import { UserInterface } from "@/types";

export const useUser = (username: string | undefined) => {
  const [user, setUser] = useState<null | UserInterface>(null);
  const [loading, setLoading] = useState(true);

  const getUser = async () => {
    const response = await fetch(
      `http://localhost:6005/api/users/${username}`,
      { method: "GET", credentials: "include" }
    );
    if (response.status !== 200) {
      setLoading(false);
      return;
    }
    const result = await response.json();
    setUser(result.data);
    setLoading(false);
  };

  useEffect(() => {
    if (username) {
      getUser();
    }
  }, [username]);

  return { user, loading };
};
