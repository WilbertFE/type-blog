import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { UserInterface } from "@/types";
import { Settings } from "lucide-react";

interface BannerProps {
  user: UserInterface;
  owner: boolean;
}

export function Banner({ user, owner }: BannerProps) {
  return (
    <div className="relative">
      <div className="bg-secondary-config/10 h-[120px] rounded-lg"></div>
      <div className="bg-accent-config/10 h-[120px] rounded-b-lg">
        <h3 className="pt-12 text-center text-slate-400">{user.username}</h3>
        <h1 className="text-xl font-bold tracking-wide text-center text-light-config">
          {user.displayName}
        </h1>
      </div>
      <div>
        <Avatar className="absolute w-24 h-24 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>TB</AvatarFallback>
        </Avatar>
      </div>
      {owner && (
        <div className="absolute right-0 top-3 text-light-config">
          <Link to={`/user/${user.username}/settings`}>
            <Settings size={32} />
          </Link>
        </div>
      )}
    </div>
  );
}
