import {
  BellDot,
  CircleHelp,
  CircleUser,
  Database,
  Languages,
  MessageCircleMore,
  Smile,
} from "lucide-react";
import { LogoutButton } from "./LogoutButton";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useContext, useState } from "react";
import axios, { AxiosError } from "axios";
import { ExpressValidationError } from "@/types/ExpressValidationError";
import { MyDataContext } from "@/contexts/useMe.context";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export function SettingOptions() {
  const navigate = useNavigate();
  const { myData, setMyData } = useContext(MyDataContext);
  const [name, setName] = useState(myData?.displayName);
  const [username, setUsername] = useState(myData?.username);

  const handleChangeProfile = async () => {
    try {
      const data = { ...myData, displayName: name, username };
      const result = await axios.put(
        "http://localhost:6005/api/users",
        JSON.stringify(data),
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      setMyData(result.data.updatedUser);
      toast("Changes successfully saved", {
        description: "Your account has been updated",
      });
      navigate(`/user/${result.data.updatedUser.username}/settings`);
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.response?.data.errors) {
          const filteredErrors = err.response.data.errors.filter(
            (error: ExpressValidationError) => error.msg !== "null"
          );
          toast("Changes do not saved", {
            description: (
              <ul className="list-disc list-inside">
                {filteredErrors.map(
                  (err: ExpressValidationError, i: number) => (
                    <li className="text-red-600 list-item" key={i}>
                      {err.msg}
                    </li>
                  )
                )}
              </ul>
            ),
          });
          setName(myData?.displayName);
          setUsername(myData?.username);
        }
      }
      console.log(err);
    }
  };

  const settingOptions = [
    {
      title: "Account",
      info: "Account information, etc.",
      icon: <CircleUser size={32} color="#ffffff" />,
      link: "account",
      onClick: () => {
        handleChangeProfile();
      },
    },
    {
      title: "Chats",
      info: "Theme, wallpapers, chat history",
      icon: <MessageCircleMore size={32} color="#ffffff" />,
      link: "chats",
    },
    {
      title: "Avatar",
      info: "Create, edit, profile photo",
      icon: <Smile size={32} color="#ffffff" />,
      link: "avatar",
    },
    {
      title: "Notifications",
      info: "Message, group, call tones",
      icon: <BellDot size={32} color="#ffffff" />,
      link: "notifications",
    },
    {
      title: "Storage and data",
      info: "Network usage, auto-download",
      icon: <Database size={32} color="#ffffff" />,
      link: "storage",
    },
    {
      title: "App language",
      info: "English (device's language)",
      icon: <Languages size={32} color="#ffffff" />,
      link: "language",
    },
    {
      title: "Help",
      info: "Help centre, contact us, privacy policy",
      icon: <CircleHelp size={32} color="#ffffff" />,
      link: "help",
    },
  ];
  return (
    <div className="flex flex-col px-4 gap-y-8">
      {settingOptions.map((option, i) => (
        <Dialog key={i}>
          <DialogTrigger asChild>
            <div className="flex items-center p-2 rounded-lg gap-x-6 hover:bg-muted-foreground">
              <div>{option.icon}</div>
              <div>
                <h1 className="text-xl text-white">{option.title}</h1>
                <p className="font-light text-white">{option.info}</p>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid items-center grid-cols-4 gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  defaultValue={name}
                  className="col-span-3"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="grid items-center grid-cols-4 gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input
                  id="username"
                  defaultValue={username}
                  className="col-span-3"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button onClick={option.onClick}>Save Changes</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ))}
      <LogoutButton />
    </div>
  );
}
