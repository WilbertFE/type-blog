/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { LoginForm } from "./login/LoginForm";
import { useEffect, useState } from "react";

export const Login: React.FC = () => {
  const [isLogin, setIsLogin] = useState(false);
  const checkLogin = async () => {
    console.log("tes");
  };
  useEffect(() => {
    checkLogin();
  }, []);
  return (
    <main id="login" className="bg-primary-config">
      <div className="container">
        <div className="flex flex-wrap min-h-screen">
          <LoginForm />
        </div>
      </div>
    </main>
  );
};
