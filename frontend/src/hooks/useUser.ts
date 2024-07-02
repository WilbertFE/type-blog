import { useState, useEffect } from "react";
import { UserInterface } from "@/types";
import axios from "axios";

export const useUser = (username: string | undefined) => {
  const [user, setUser] = useState<null | UserInterface>(null);
  const [loading, setLoading] = useState(true);

  const getUser = async () => {
    try {
      const response = await axios.get(
        `http://localhost:6005/api/users/${username}`,
        { withCredentials: true }
      );
      const result = response.data;
      setUser(result);
      setLoading(false);
    } catch (err: unknown) {
      console.error("failed to fetch user data");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (username) {
      setLoading(true);
      getUser();
    } else {
      setLoading(false);
    }
  }, [username]);

  return { user, loading };
};
