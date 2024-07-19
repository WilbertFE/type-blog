import { useState, useEffect } from "react";
import { UserInterface } from "@/types";
import axios from "axios";

export const useUser = (username: string | undefined) => {
  const [user, setUser] = useState<null | UserInterface>(null);
  const [isLoading, setIsLoading] = useState(true);

  const getUser = async () => {
    try {
      const response = await axios.get(
        `http://localhost:6005/api/users/user/${username}`,
        { withCredentials: true }
      );
      if (!response.data) {
        throw new Error();
      }
      const result = response.data;
      setUser(result);
      setIsLoading(false);
    } catch (err: unknown) {
      console.error("failed to fetch user data");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (username) {
      setIsLoading(true);
      getUser();
    } else {
      setIsLoading(false);
    }
  }, [username]);

  return { user, isLoading };
};
