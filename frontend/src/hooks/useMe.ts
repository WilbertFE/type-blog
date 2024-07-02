import { useContext, useEffect, useState } from "react";
import { UseMeState } from "@/types";
import axios from "axios";
import { UseMeContext } from "@/contexts/useMe.context.tsx";

export const useMe = () => {
  const { myData, setMyData } = useContext<UseMeState>(UseMeContext);
  const [loading, setLoading] = useState(true);

  const getUserData = async () => {
    try {
      const response = await axios.get("http://localhost:6005/api/users/me", {
        withCredentials: true,
      });

      const result = response.data;
      setMyData(result);
      setLoading(false);
    } catch (err: unknown) {
      setLoading(false);
      console.error("Failed to get my data");
    }
  };

  useEffect(() => {
    if (myData) {
      setLoading(false);
    } else {
      getUserData();
    }
  }, [myData]);

  return { myData, loading, setMyData };
};
