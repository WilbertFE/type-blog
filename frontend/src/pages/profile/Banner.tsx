import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type User = {
  googleId: string;
  displayName: string;
  email: string;
  image: string;
  username: string;
  updatedAt: string;
};

interface BannerProps {
  username: string | undefined;
  user: User;
}

export function Banner({ username, user }: BannerProps) {
  return (
    <div className="relative">
      <div className="bg-secondary-config/10 h-[120px] rounded-lg"></div>
      <div className="bg-accent-config/10 h-[120px] rounded-b-lg">
        <h3 className="pt-12 text-center text-slate-400">{user.username}</h3>
        <h1 className="text-xl font-bold tracking-wide text-center text-light-config">
          {user.displayName}
        </h1>
      </div>
      <Avatar className="absolute w-24 h-24 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>TB</AvatarFallback>
      </Avatar>
    </div>
  );
}
