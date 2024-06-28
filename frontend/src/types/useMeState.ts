import { UserInterface } from "@/types";

export interface UseMeState {
  setMyData: React.Dispatch<React.SetStateAction<null>>;
  myData: null | UserInterface;
}
