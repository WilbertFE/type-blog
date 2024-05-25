import { useState, useEffect } from "react";

type User = {
  googleId: string;
  displayName: string;
  email: string;
  image: string;
  username: string;
  updatedAt: string;
};

export const useUser = (googleId: string) => {
  const [user, setUser] = useState<null | User>(null);

  const getUser = async () => {
    const response = await fetch(`http://localhost:6005/api/users/${googleId}`);
    if (response.status !== 200) {
      return;
    }
    const result = await response.json();
    setUser(result);
  };

  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { user };
};
