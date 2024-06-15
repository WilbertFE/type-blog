import { Button } from "@/components/ui/button";
import { Grip, MessageCircleMore, UserPlus } from "lucide-react";

export function CallToAction() {
  return (
    <div className="flex justify-between px-4">
      <Button
        variant="outline"
        className="space-x-1 bg-transparent text-light-config"
      >
        <UserPlus size={20} />
        <span>Follow</span>
      </Button>
      <Button
        variant="outline"
        className="space-x-1 bg-transparent text-light-config"
      >
        <MessageCircleMore size={20} />
        <span>Message</span>
      </Button>
      <Button
        variant="outline"
        className="space-x-1 bg-transparent text-light-config"
      >
        <Grip size={20} />
        <span>More</span>
      </Button>
    </div>
  );
}
