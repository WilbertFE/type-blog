import { Search } from "lucide-react";

export function Searchbar() {
  return (
    <div className="flex items-center px-4 py-3 mt-12 bg-white rounded-sm shadow-sm gap-x-2">
      <div className="text-light-config">
        <Search size={24} />
      </div>
      <div className="flex-1">
        <h3 className="-mt-[2px] text-slate-400">Search User</h3>
      </div>
    </div>
  );
}
