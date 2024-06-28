import { UserInterface } from "@/types";
import { ChevronLeft, Search } from "lucide-react";
import { Link } from "react-router-dom";

export function Header({ myData }: { myData: UserInterface }) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <Link to={`/user/${myData.username}`}>
          <ChevronLeft size={32} color="#fff" />
        </Link>
        <span className="text-xl tracking-wide text-white">Settings</span>
        <Search size={32} color="#fff" />
      </div>
    </div>
  );
}
