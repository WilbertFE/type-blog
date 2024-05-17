import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";

export function GoogleButton() {
  const handleGoogleLogin = () => {
    window.open("http://localhost:6005/auth/google/callback", "_self");
  };
  return (
    <Button
      onClick={handleGoogleLogin}
      className="flex items-center justify-center py-2 mt-2 bg-transparent border-2 group border-slate-300 gap-x-2"
      type="button"
    >
      <FcGoogle size={24} />
      <span className="text-sm group-hover:text-light-config text-slate-600">
        Sign in dengan google
      </span>
    </Button>
  );
}
