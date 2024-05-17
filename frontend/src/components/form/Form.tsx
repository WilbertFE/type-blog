import React from "react";

export const Form: React.FC<FormProps> = () => {
  const handleClick = async () => {
    window.open("http://localhost:6005/auth/google/callback", "_self");
  };

  return <h1>login</h1>;
};
