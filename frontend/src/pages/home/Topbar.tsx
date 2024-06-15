import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserInterface } from "@/types";
import { Bell } from "lucide-react";

export function Topbar(props: { user: UserInterface }) {
  const { user } = props;
  return (
    <div className="flex items-center justify-between mt-12">
      <div className="flex flex-1 gap-x-2">
        <Avatar>
          <AvatarImage
            src={user.image || "https://github.com/shadcn.png"}
            alt="profile"
          />
          <AvatarFallback>TB</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <h1 className="text-xl font-bold tracking-wider text-light-config line-clamp-2">
            Hello, <strong>{user.displayName}!</strong>
          </h1>
          <h3 className="text-sm text-light-config">
            Lets see latest blog for you
          </h3>
        </div>
      </div>
      <div className="text-light-config">
        <Bell size={32} />
      </div>
    </div>
  );
}
