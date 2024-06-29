import { ReactNode, createContext, useState } from "react";
import { UseMeState } from "@/types";
import { UserInterface } from "@/types";

const UseMeContext = createContext<UseMeState>({
  myData: null,
  setMyData: () => {},
});

const UseMeContextProvider = ({ children }: { children: ReactNode }) => {
  const [myData, setMyData] = useState<null | UserInterface>(null);
  return (
    <UseMeContext.Provider value={{ myData, setMyData }}>
      {children}
    </UseMeContext.Provider>
  );
};

export { UseMeContext, UseMeContextProvider };
