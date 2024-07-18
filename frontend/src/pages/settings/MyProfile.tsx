import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MyDataContext } from "@/contexts/useMe.context";
import { useContext } from "react";

export function MyProfile() {
  const { myData } = useContext(MyDataContext);
  return (
    <div className="flex items-center pb-3 border-b border-slate-400 border-muted-foreground gap-x-6">
      <div>
        <Avatar className="w-16 h-16 border border-muted-foreground">
          <AvatarImage
            className="object-cover object-center"
            src={myData?.image}
            alt="profile_image"
          />
          <AvatarFallback>TB</AvatarFallback>
        </Avatar>
      </div>
      <div>
        <h3 className="flex items-center text-xl font-medium tracking-wide text-white line-clamp-1">
          {myData?.displayName}
        </h3>
        <span className="text-white line-clamp-1">@{myData?.username}</span>
      </div>
    </div>
  );
}
