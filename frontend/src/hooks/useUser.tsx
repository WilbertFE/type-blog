import { useState, useEffect } from "react";

type User = {
  googleId: string;
  displayName: string;
  email: string;
  image: string;
  username: string;
  updatedAt: string;
};

export const useUser = (googleId: string | undefined) => {
  const [user, setUser] = useState<null | User>(null);
  const [loading, setLoading] = useState(true);

  const getUser = async () => {
    const response = await fetch(`http://localhost:6005/api/users/${googleId}`);
    if (response.status !== 200) {
      setLoading(false);
      return;
    }
    const result = await response.json();
    setUser(result);
    setLoading(false);
  };

  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { user, loading };
};
