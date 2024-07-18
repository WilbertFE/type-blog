import { useContext, useEffect, useState } from "react";
import { UseMeState } from "@/types";
import axios from "axios";
import { MyDataContext } from "@/contexts/useMe.context.tsx";

export const useMe = () => {
  const { myData, setMyData } = useContext<UseMeState>(MyDataContext);
  const [isLoading, setIsLoading] = useState(true);

  const getUserData = async () => {
    try {
      const response = await axios.get("http://localhost:6005/api/users/me", {
        withCredentials: true,
      });
      const result = response.data;
      if (result) {
        setMyData(result);
        setIsLoading(false);
      } else {
        throw new Error();
      }
    } catch (err: unknown) {
      setIsLoading(false);
      console.error("Failed to get my data");
    }
  };

  useEffect(() => {
    if (myData) {
      setIsLoading(false);
    } else {
      getUserData();
    }
  }, [myData]);

  return { myData, isLoading, setMyData };
};
