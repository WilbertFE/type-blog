import { createContext } from "react";
import { useState } from "react";
import React from "react";

type ErrorType = {
  msg: string;
  field?: string;
  value?: string;
  path: string;
  location?: string;
};

type ValidationContextType = {
  validationErrors: ErrorType[];
  setValidationErrors: React.Dispatch<React.SetStateAction<never[]>>;
};

const ValidationContext = createContext<ValidationContextType | null>(null);

const ValidationContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [validationErrors, setValidationErrors] = useState([]);
  return (
    <ValidationContext.Provider
      value={{ validationErrors, setValidationErrors }}
    >
      {children}
    </ValidationContext.Provider>
  );
};

export { ValidationContext, ValidationContextProvider };
