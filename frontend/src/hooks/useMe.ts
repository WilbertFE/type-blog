import { useEffect, useState } from "react";
import { UserInterface } from "@/types";
import axios from "axios";

export const useMe = () => {
  const [user, setUser] = useState<null | UserInterface>(null);
  const [loading, setLoading] = useState(true);

  const getUserData = async () => {
    try {
      const response = await axios.get("http://localhost:6005/api/users/me", {
        withCredentials: true,
      });
      const result = response.data;
      setUser(result);
      setLoading(false);
    } catch (err: unknown) {
      setLoading(false);
      console.error("Failed to get my data");
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return { user, loading };
};
