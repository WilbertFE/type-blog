import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LuPencil } from "react-icons/lu";

export function MyProfile() {
  return (
    <div className="flex items-center p-6 rounded-lg gap-x-4 bg-slate-700">
      <div>
        <Avatar className="w-16 h-16 border-2 border-accent-config">
          <AvatarImage src={"https://github.com/shadcn.png"} alt="profile" />
          <AvatarFallback>TB</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex items-center flex-1">
        <div className="flex-1">
          <h3 className="text-xl font-bold tracking-wider text-light-config">
            Wilbert
          </h3>
          <span className="text-light-config">wilbert@gmail.com</span>
        </div>
        <div>
          <LuPencil size={24} className="text-light-config" />
        </div>
      </div>
    </div>
  );
}
