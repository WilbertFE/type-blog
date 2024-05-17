import { ValidationContext } from "@/contexts/validation.context";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

type NavigationProps = {
  children: React.ReactNode;
  link: string;
};

export const Navigation: React.FC<NavigationProps> = ({
  children,
  link,
}: NavigationProps) => {
  const msg: string =
    link === "signup" ? "Dont have an account? " : "Already have an account? ";
  const { setValidationErrors } = useContext(ValidationContext) ?? {
    setValidationErrors: null,
  };
  return (
    <div className="text-sm text-center text-light-config">
      {msg}
      <Link
        onClick={() => setValidationErrors?.([])}
        to={`/${link}`}
        className="text-accent-config"
      >
        {children}
      </Link>
    </div>
  );
};
