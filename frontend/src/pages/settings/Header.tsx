import { ChevronLeft, Search } from "lucide-react";

export function Header() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <ChevronLeft size={32} color="#fff" />
        <span className="text-xl tracking-wide text-white">Settings</span>
        <Search size={32} color="#fff" />
      </div>
    </div>
  );
}
