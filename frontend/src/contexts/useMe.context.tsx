import { ReactNode, createContext, useState } from "react";
import { UseMeState } from "@/types";
import { UserInterface } from "@/types";

const MyDataContext = createContext<UseMeState>({
  myData: null,
  setMyData: () => {},
});

const MyDataContextProvider = ({ children }: { children: ReactNode }) => {
  const [myData, setMyData] = useState<null | UserInterface>(null);
  return (
    <MyDataContext.Provider value={{ myData, setMyData }}>
      {children}
    </MyDataContext.Provider>
  );
};

export { MyDataContext, MyDataContextProvider };
