import { Button } from "@/components/ui/button";

export function LogoutButton() {
  const handleLogout = async () => {
    console.log("logout");
  };
  return (
    <Button type="button" onClick={handleLogout} variant="destructive">
      Log out
    </Button>
  );
}
