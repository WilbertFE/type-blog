import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CommentInterface } from "@/types/Comment";
import { ChevronDown, Flag, ThumbsDown, ThumbsUp, Trash2 } from "lucide-react";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { UseMeContext } from "@/contexts/useMe.context";
import { useContext } from "react";

export function Comment({ comment }: { comment: CommentInterface }) {
  const { myData } = useContext(UseMeContext);
  return (
    <div className="flex gap-x-4">
      <Avatar>
        <AvatarImage src={comment.image} alt={comment.creator} />
        <AvatarFallback>TB</AvatarFallback>
      </Avatar>
      <div className="flex flex-col flex-1">
        <h3>@{comment.creator}</h3>
        <p className="break-all">{comment.content}</p>
        <div className="flex mt-2 gap-x-3">
          <div className="flex gap-x-1">
            <ThumbsUp strokeWidth={1} />
            <span>{comment.likes}</span>
          </div>
          <div className="flex gap-x-1">
            <ThumbsDown strokeWidth={1} />
            <span>{comment.disLikes}</span>
          </div>
        </div>
        <div className="flex items-center self-start mt-2 cursor-pointer">
          <ChevronDown className="text-blue-600" />
          <span className="font-medium text-blue-600">0 replies</span>
        </div>
      </div>
      <Select>
        <SelectTrigger className="self-start">
          <BsThreeDotsVertical size={30} />
        </SelectTrigger>
        <SelectContent>
          {myData?.username === comment.creator && (
            <SelectItem className="px-0" value="delete">
              <div className="flex items-center justify-around gap-x-2">
                <Trash2 />
                <span className="text-lg">Delete</span>
              </div>
            </SelectItem>
          )}
          <SelectItem className="px-0" value="report">
            <div className="flex items-center justify-around gap-x-2">
              <Flag />
              <span className="text-lg">Report</span>
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
