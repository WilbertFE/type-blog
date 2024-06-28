import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { UserInterface } from "@/types";
import { Camera, Settings } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

interface BannerProps {
  user: UserInterface;
  owner: boolean;
}

export function Banner({ user, owner }: BannerProps) {
  const storage = getStorage();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    if (target.files) {
      const file = target.files[0];
      const storageRef = ref(storage, `public/${file.name + uuidv4()}`);

      uploadBytes(storageRef, file)
        .then((snapshot) => console.log("Uploaded a blob or file!", snapshot))
        .catch((error) => {
          console.error("Upload failed:", error);
        });
    }
  };

  return (
    <div className="relative">
      <div className="bg-secondary-config/10 h-[120px] rounded-lg"></div>
      <div className="bg-accent-config/10 h-[120px] rounded-b-lg">
        <h3 className="pt-12 text-center text-slate-400">{user.username}</h3>
        <h1 className="text-xl font-bold tracking-wide text-center text-light-config">
          {user.displayName}
        </h1>
      </div>
      <div className="absolute w-24 h-24 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
        <Avatar className="w-full h-full">
          <AvatarImage src={user.image || "https://github.com/shadcn.png"} />
          <AvatarFallback>TB</AvatarFallback>
        </Avatar>
        <Label
          htmlFor="profile_image"
          className="absolute p-1 rounded-full bg-black/50 -right-1 bottom-1"
        >
          <Camera size={24} color="#fff" />
        </Label>
        <Input
          onChange={handleImageChange}
          type="file"
          id="profile_image"
          className="hidden"
        />
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
