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
      if (username === myData.username) {
        setOwner(true);
        setLoadingOwner(false);
      } else {
        setLoadingOwner(true);
      }
    }
  }, [username, myData]);

  return { owner, loadingOwner };
}
