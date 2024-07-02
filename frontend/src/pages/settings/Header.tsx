import { ChevronLeft, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <ChevronLeft onClick={() => navigate(-1)} size={32} color="#fff" />
        <span className="text-xl tracking-wide text-white">Settings</span>
        <Search size={32} color="#fff" />
      </div>
    </div>
  );
}
