import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../../firebase.ts";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function GoogleButton() {
  const navigate = useNavigate();
  const auth = getAuth(app);

  const handleGoogleClick = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    try {
      const resultsFromGoogle = await signInWithPopup(auth, provider);
      const res = await axios.post(
        "http://localhost:6005/api/auth/google",
        JSON.stringify({
          displayName: resultsFromGoogle.user.displayName,
          email: resultsFromGoogle.user.email,
          image: resultsFromGoogle.user.photoURL,
        }),
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.status !== 200) {
        throw new Error();
      }
      return navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button
      onClick={handleGoogleClick}
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
