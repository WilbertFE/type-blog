import { useEffect, useState } from "react";

interface User {
  googleId: string;
  displayName: string;
  email: string;
  image: string;
  username: string;
  updatedAt: string;
}

export const useUserUsername = (username: string | undefined) => {
  const [user, setUser] = useState<null | User>(null);

  const getGoogleId = async () => {
    try {
      const response = await fetch(
        `http://localhost:6005/api/users/username/${username}`
      );
      if (response.status !== 200) {
        throw new Error();
      }
      const result = await response.json();
      console.log(result);
      setUser(result);
    } catch (err: unknown) {
      console.log("failed fetch");
    }
  };

  useEffect(() => {
    getGoogleId();
  }, []);

  return { user };
};
