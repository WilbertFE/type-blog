import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function MyProfile() {
  return (
    <div className="flex items-center pb-3 border-b border-slate-400 border-muted-foreground gap-x-6">
      <div>
        <Avatar className="w-16 h-16 border border-muted-foreground">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>TB</AvatarFallback>
        </Avatar>
      </div>
      <div>
        <h3 className="text-xl font-medium tracking-wide text-white line-clamp-1">
          Wilbert
        </h3>
        <p className="text-white line-clamp-1">wilbert@gmail.com</p>
      </div>
    </div>
  );
}
