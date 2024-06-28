import { useEffect, useState } from "react";
import { UserInterface } from "@/types";

export function useOwner(
  username: string | undefined,
  myData: UserInterface | null
) {
  const [owner, setOwner] = useState(false);

  useEffect(() => {
    if (username && myData) {
      if (username === myData.username) {
        setOwner(true);
      }
    }
  }, [username, myData]);

  return { owner };
}
