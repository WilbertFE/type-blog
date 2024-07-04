import { useEffect } from "react";
import { LoginForm } from "./login/LoginForm";
import { useNavigate } from "react-router-dom";
import { useMe } from "@/hooks/UseMe";

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const { myData, loading } = useMe();

  useEffect(() => {
    if (!loading) {
      if (myData) {
        navigate("/");
      }
    }
  }, [navigate, myData, loading]);

  return (
    <main id="login" className="bg-primary-config">
      <div className="container">
        <div className="flex flex-wrap min-h-screen">
          {!myData && <LoginForm />}
        </div>
      </div>
    </main>
  );
};
