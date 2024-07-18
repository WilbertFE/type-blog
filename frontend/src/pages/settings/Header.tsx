import { MyDataContext } from "@/contexts/useMe.context";
import { ChevronLeft, Search } from "lucide-react";
import { useContext } from "react";
import { Link } from "react-router-dom";

export function Header() {
  const { myData } = useContext(MyDataContext);
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <Link to={`/user/${myData?.username}`}>
          <ChevronLeft size={32} color="#fff" className="cursor-pointer" />
        </Link>
        <span className="text-xl tracking-wide text-white">Settings</span>
        <Search size={32} color="#fff" />
      </div>
    </div>
  );
}
