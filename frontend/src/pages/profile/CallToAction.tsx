import { Button } from "@/components/ui/button";
import { IoPersonAddOutline } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { IoIosMore } from "react-icons/io";

export function CallToAction() {
  return (
    <div className="flex justify-between px-4">
      <Button
        variant="outline"
        className="space-x-1 bg-transparent text-light-config"
      >
        <IoPersonAddOutline />
        <span>Follow</span>
      </Button>
      <Button
        variant="outline"
        className="space-x-1 bg-transparent text-light-config"
      >
        <MdOutlineMessage />
        <span>Message</span>
      </Button>
      <Button
        variant="outline"
        className="space-x-1 bg-transparent text-light-config"
      >
        <IoIosMore />
        <span>More</span>
      </Button>
    </div>
  );
}
