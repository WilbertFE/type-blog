import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserInterface } from "@/types";

export function MyProfile({ myData }: { myData: UserInterface }) {
  return (
    <div className="flex items-center pb-3 border-b border-slate-400 border-muted-foreground gap-x-6">
      <div>
        <Avatar className="w-16 h-16 border border-muted-foreground">
          <AvatarImage
            className="object-cover object-center"
            src={myData.image || "https://github.com/shadcn.png"}
            alt="profile_image"
          />
          <AvatarFallback>TB</AvatarFallback>
        </Avatar>
      </div>
      <div>
        <h3 className="flex items-center text-xl font-medium tracking-wide text-white line-clamp-1">
          {myData.displayName}
        </h3>
        <span className="text-white line-clamp-1">@{myData.username}</span>
      </div>
    </div>
  );
}
