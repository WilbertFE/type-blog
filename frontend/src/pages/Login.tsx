import { useEffect } from "react";
import { LoginForm } from "./login/LoginForm";
import { useNavigate } from "react-router-dom";
import { useMe } from "@/hooks/UseMe";

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const { myData, isLoading } = useMe();

  useEffect(() => {
    if (!isLoading) {
      if (myData) {
        navigate("/");
      }
    }
  }, [navigate, myData, isLoading]);

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
