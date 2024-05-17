import { useEffect, useState } from "react";

type UserData = {
  name: string;
  email: string;
};

const useUser = () => {
  const [user, setUser] = useState<UserData | null>(null);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const getUser = async () => {
      const result = await fetch("http://localhost:3000/api/users/me", {
        method: "GET",
        credentials: "include",
      }).then((res) => res.json());
      if (result.errors) {
        return setIsError(true);
      } else {
        setUser(result);
      }
    };
    getUser();
  }, []);
  return { user, isError };
};

export { useUser };
