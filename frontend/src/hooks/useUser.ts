import { useState, useEffect } from "react";
import { UserInterface } from "@/types";
import axios from "axios";

export const useUser = (userID: string | undefined) => {
  const [user, setUser] = useState<null | UserInterface>(null);
  const [loading, setLoading] = useState(true);

  const getUser = async () => {
    try {
      const response = await axios.get(
        `http://localhost:6005/api/users/${userID}`,
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
    if (userID) {
      setLoading(true);
      getUser();
    } else {
      setLoading(false);
    }
  }, [userID]);

  return { user, loading };
};
