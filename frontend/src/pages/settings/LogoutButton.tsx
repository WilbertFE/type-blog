import { Button } from "@/components/ui/button";
import axios from "axios";

export function LogoutButton() {
  const handleLogout = async () => {
    try {
      const result = await axios.get("http://localhost:6005/api/auth/logout", {
        withCredentials: true,
      });
      console.log(result.data);
      window.location.href = "/";
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Button type="button" onClick={handleLogout} variant="destructive">
      Log out
    </Button>
  );
}
