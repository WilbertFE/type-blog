/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { LoginForm } from "./login/LoginForm";

export const Login: React.FC = () => {
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
