import { useEffect, useState } from "react";
import { UserInterface } from "@/types";

export function useOwner(
  username: string | undefined,
  myData: UserInterface | null
) {
  const [owner, setOwner] = useState(false);
  const [loadingOwner, setLoadingOwner] = useState(true);

  useEffect(() => {
    if (username && myData) {
      setLoadingOwner(true);
      if (username === myData.username) {
        setOwner(true);
        setLoadingOwner(false);
      } else {
        setLoadingOwner(false);
      }
    } else {
      setLoadingOwner(false);
    }
  }, [username, myData]);

  return { owner, loadingOwner };
}
