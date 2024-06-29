import { UserInterface } from "@/types";

export interface UseMeState {
  setMyData: React.Dispatch<React.SetStateAction<null | UserInterface>>;
  myData: null | UserInterface;
}
