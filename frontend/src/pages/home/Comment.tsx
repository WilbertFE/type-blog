import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CommentInterface } from "@/types/Comment";
import { ChevronDown, ThumbsDown, ThumbsUp } from "lucide-react";
import { BsThreeDotsVertical } from "react-icons/bs";

export function Comment({ comment }: { comment: CommentInterface }) {
  return (
    <div className="flex gap-x-4">
      <Avatar>
        <AvatarImage src={comment.image} alt={comment.creator} />
        <AvatarFallback>TB</AvatarFallback>
      </Avatar>
      <div className="flex flex-col flex-1">
        <h3>@{comment.creator}</h3>
        <p>{comment.content}</p>
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
      <BsThreeDotsVertical size={30} />
    </div>
  );
}
