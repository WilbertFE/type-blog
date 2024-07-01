import { Link } from "react-router-dom";
import { Camera, Settings } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useMe } from "@/hooks/UseMe";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useOwner } from "@/hooks/useOwner";
import { UserInterface } from "@/types";

interface BannerProps {
  user: UserInterface;
  username: string | undefined;
}

export function Banner({ user, username }: BannerProps) {
  const storage = getStorage();
  const { myData, setMyData } = useMe();
  const { owner } = useOwner(username, myData);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const target = e.target as HTMLInputElement;
      if (target.files) {
        const file = target.files[0];
        const imageRef = `profile/${file.name + uuidv4()}`;
        const storageRef = ref(storage, imageRef);
        const prevImageRef = (myData?.image as string)
          .split("/o/")[1]
          .split("?")[0]
          .replace(/%2F/g, "/");
        const prevStorageRef = ref(storage, prevImageRef);

        await deleteObject(prevStorageRef)
          .then(() => console.log("image deleted"))
          .catch((reason) => console.error(reason));

        const downloadURL = await uploadBytes(storageRef, file)
          .then((snapshot) => getDownloadURL(snapshot.ref))
          .catch((error: unknown) => {
            throw new Error("upload image failed : " + error);
          });
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const result = await axios.post(
          "http://localhost:6005/api/users/image",
          JSON.stringify({ image: downloadURL }),
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        );

        setMyData((value): UserInterface | null => {
          return {
            ...value,
            username: value?.username as string,
            image: downloadURL as string | undefined,
          };
        });
      }
    } catch (err) {
      console.error(err);
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
        <Avatar className="w-full h-full border border-muted-foreground">
          <AvatarImage
            className="object-cover object-center"
            src={user.image}
          />
          <AvatarFallback>TB</AvatarFallback>
        </Avatar>
        {owner && (
          <>
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
          </>
        )}
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
