import { Button } from "@/components/ui/button";
import { UserInterface } from "@/types";
import {
  BellDot,
  CircleHelp,
  CircleUser,
  Database,
  Languages,
  MessageCircleMore,
  Smile,
} from "lucide-react";
import { Link } from "react-router-dom";

export function SettingOptions({ myData }: { myData: UserInterface }) {
  const settingOptions = [
    {
      title: "Account",
      info: "Account information, etc.",
      icon: <CircleUser size={32} color="#ffffff" />,
      link: "account",
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
        <Link to={`/user/${myData.username}/settings/${option.link}`}>
          <div
            key={i}
            className="flex items-center p-2 rounded-lg gap-x-6 hover:bg-muted-foreground"
          >
            <div>{option.icon}</div>
            <div>
              <h1 className="text-xl text-white">{option.title}</h1>
              <p className="font-light text-white">{option.info}</p>
            </div>
          </div>
        </Link>
      ))}
      <Button variant="destructive">Log out</Button>
    </div>
  );
}
