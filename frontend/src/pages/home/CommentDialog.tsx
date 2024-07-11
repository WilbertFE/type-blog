import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useContext, useEffect, useState } from "react";
import { BlogInterface } from "@/types";
import { Comment } from "./Comment";
import { CommentInterface } from "@/types/Comment";
import { UseMeContext } from "@/contexts/useMe.context";

export function CommentDialog({ blog }: { blog: BlogInterface }) {
  const [isComment, setIsComment] = useState(false);
  const [content, setContent] = useState("");
  const [comments, setComments] = useState<[] | CommentInterface[]>([]);
  const { myData } = useContext(UseMeContext);

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
      setComments((prevState) => [...prevState, result.data]);
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
          <DialogTitle>Comments {comments.length}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4 sm:max-h-[400px] max-h-[300px] overflow-y-scroll">
          {comments.length > 0 &&
            comments.map((comment, i) => <Comment key={i} comment={comment} />)}
        </div>
        <DialogFooter className="block">
          <div className="flex flex-col">
            <div className="flex">
              <Avatar>
                <AvatarImage src={myData?.image} alt="@shadcn" />
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
