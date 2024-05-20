import { CiSearch } from "react-icons/ci";

export function SearchBar() {
  return (
    <div className="flex items-center px-4 py-3 mt-12 bg-white rounded-sm shadow-sm gap-x-2">
      <div>
        <CiSearch size={24} />
      </div>
      <div className="flex-1">
        <h3 className="-mt-[2px] text-slate-400">Search User</h3>
      </div>
    </div>
  );
}
