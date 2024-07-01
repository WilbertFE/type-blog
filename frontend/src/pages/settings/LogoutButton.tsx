import { Button } from "@/components/ui/button";

export function LogoutButton() {
  return (
    <Button
      type="button"
      onClick={(e) => console.log(e.target)}
      variant="destructive"
    >
      Log out
    </Button>
  );
}
