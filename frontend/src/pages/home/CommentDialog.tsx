import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { ChevronDown, MessageSquare, ThumbsDown, ThumbsUp } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";
import { BlogInterface } from "@/types";

export function CommentDialog({ blog }: { blog: BlogInterface }) {
  const [isComment, setIsComment] = useState(false);
  const [content, setContent] = useState("");
  const [comments, setComments] = useState([]);

  const getAllComments = async () => {
    try {
      const result = await axios.get(
        `http://localhost:6005/api/comments/${blog._id}`,
        {
          withCredentials: true,
        }
      );
      setComments(result.data);
    } catch (err: unknown) {
      console.error(err);
    }
  };

  useEffect(() => {
    getAllComments();
  }, []);

  const handleCancel = () => {
    setIsComment(false);
    setContent("");
  };

  const handleComment = async () => {
    try {
      const result = await axios.post(
        "http://localhost:6005/api/comments",
        JSON.stringify({ content, blogID: blog._id }),
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("result : ", result);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex cursor-pointer gap-x-1">
          <MessageSquare />
          <span>0</span>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>Comments 1.0K</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <div className="flex gap-x-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <h3>@wilbert</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis, sint.
              </p>
              <div className="flex mt-2 gap-x-3">
                <div className="flex gap-x-1">
                  <ThumbsUp strokeWidth={1} />
                  <span>0</span>
                </div>
                <div className="flex gap-x-1">
                  <ThumbsDown strokeWidth={1} />
                  <span>0</span>
                </div>
              </div>
              <div className="flex items-center self-start mt-2 cursor-pointer">
                <ChevronDown className="text-blue-600" />
                <span className="font-medium text-blue-600">1 replies</span>
              </div>
            </div>
            <BsThreeDotsVertical size={30} />
          </div>
        </div>
        <DialogFooter className="block">
          <div className="flex flex-col">
            <div className="flex">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Textarea
                placeholder="Add a comment"
                rows={1}
                onFocus={() => setIsComment(true)}
                onChange={(e) => setContent(e.target.value)}
                className="border-t-0 border-b min-h-8 border-x-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:border-x-0 focus-visible:border-t-0 focus-visible:ring-offset-0"
              />
            </div>
            {isComment && (
              <div className="self-end mt-2 space-x-2">
                <Button onClick={handleCancel} variant="destructive">
                  Cancel
                </Button>
                <Button onClick={handleComment}>Comment</Button>
              </div>
            )}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
