/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { LoginForm } from "./login/LoginForm";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Login: React.FC = () => {
  const navigate = useNavigate();

  const checkLogin = async () => {
    const response = await fetch("http://localhost:6005/api/auth", {
      method: "GET",
      credentials: "include",
    });
    if (response.status === 200) {
      return navigate("/");
    }
  };

  useEffect(() => {
    checkLogin();
  });
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
