import { useEffect, useState } from "react";
import { UserInterface } from "@/types";

export function useOwner(
  username: string | undefined,
  userMe: UserInterface | null
) {
  const [owner, setOwner] = useState(false);

  useEffect(() => {
    if (username && userMe) {
      if (username === userMe.username) {
        setOwner(true);
      }
    }
  }, [username, userMe]);

  return { owner };
}
