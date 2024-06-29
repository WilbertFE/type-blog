import React, { useEffect } from "react";
import { LoginForm } from "./login/LoginForm";
import { useLogin } from "@/hooks/useLogin";
import { useNavigate } from "react-router-dom";

export const Login: React.FC = () => {
  const { login, loading } = useLogin();
  const navigate = useNavigate();

  useEffect(() => {
    if (login && !loading) {
      navigate("/");
    }
  }, [login, navigate, loading]);

  return (
    <main id="login" className="bg-primary-config">
      <div className="container">
        <div className="flex flex-wrap min-h-screen">
          {!login && !loading && <LoginForm />}
        </div>
      </div>
    </main>
  );
};
