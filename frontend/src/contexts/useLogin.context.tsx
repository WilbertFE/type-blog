import { createContext, useState, ReactNode } from "react";

interface UseLoginState {
  login: boolean;
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const UseLoginContext = createContext<UseLoginState>({
  login: false,
  setLogin: () => {},
});

const UseLoginContextProvider = ({ children }: { children: ReactNode }) => {
  const [login, setLogin] = useState(false);
  return (
    <UseLoginContext.Provider value={{ login, setLogin }}>
      {children}
    </UseLoginContext.Provider>
  );
};

export { UseLoginContext, UseLoginContextProvider };
