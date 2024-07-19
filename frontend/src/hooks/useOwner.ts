import { useEffect, useState } from "react";
import { UserInterface } from "@/types";

export function useOwner(
  username: string | undefined,
  myData: UserInterface | null
) {
  const [owner, setOwner] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (username && myData) {
      setIsLoading(true);
      if (username === myData.username) {
        setOwner(true);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    } else {
      setIsLoading(false);
    }
  }, [username, myData]);

  return { owner, isLoading };
}
