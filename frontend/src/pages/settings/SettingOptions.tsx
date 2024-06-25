import { Button } from "@/components/ui/button";
import {
  BellDot,
  CircleHelp,
  CircleUser,
  Database,
  Languages,
  MessageCircleMore,
  Smile,
} from "lucide-react";

export function SettingOptions() {
  const settingOptions = [
    {
      title: "Account",
      info: "Account information, etc.",
      icon: <CircleUser size={32} color="#ffffff" />,
    },
    {
      title: "Chats",
      info: "Theme, wallpapers, chat history",
      icon: <MessageCircleMore size={32} color="#ffffff" />,
    },
    {
      title: "Avatar",
      info: "Create, edit, profile photo",
      icon: <Smile size={32} color="#ffffff" />,
    },
    {
      title: "Notifications",
      info: "Message, group, call tones",
      icon: <BellDot size={32} color="#ffffff" />,
    },
    {
      title: "Storage and data",
      info: "Network usage, auto-download",
      icon: <Database size={32} color="#ffffff" />,
    },
    {
      title: "App language",
      info: "English (device's language)",
      icon: <Languages size={32} color="#ffffff" />,
    },
    {
      title: "Help",
      info: "Help centre, contact us, privacy policy",
      icon: <CircleHelp size={32} color="#ffffff" />,
    },
  ];
  return (
    <div className="flex flex-col px-4 gap-y-8">
      {settingOptions.map((option, i) => (
        <div key={i} className="flex items-center gap-x-6">
          <div>{option.icon}</div>
          <div>
            <h1 className="text-xl text-white">{option.title}</h1>
            <p className="font-light text-white">{option.info}</p>
          </div>
        </div>
      ))}
      <Button variant="destructive">Log out</Button>
    </div>
  );
}
