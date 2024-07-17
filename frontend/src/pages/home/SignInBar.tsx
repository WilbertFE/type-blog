import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const SignInBar: React.FC = () => {
  return (
    <nav className="absolute left-0 right-0 flex items-center p-4 bg-secondary-config">
      <h3 className="flex-1 font-bold tracking-wider text-light-config">
        Type Wilbert
      </h3>
      <Link to="/login">
        <Button className="font-medium tracking-wide rounded-full bg-accent-config text-light-config hover:bg-accent-config/80">
          Login
        </Button>
      </Link>
    </nav>
  );
};
