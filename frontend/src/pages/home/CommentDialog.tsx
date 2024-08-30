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
import { useContext, useState } from "react";
import { BlogInterface } from "@/types";
import { Comment } from "./Comment";
import { MyDataContext } from "@/contexts/useMe.context";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useComments } from "@/hooks/useComments.ts";

export function CommentDialog({ blog }: { blog: BlogInterface }) {
  const [isComment, setIsComment] = useState(false);
  const [content, setContent] = useState("");

  const { myData } = useContext(MyDataContext);
  const { comments, setComments } = useComments({ blog });

  const handleCancel = () => {
    setIsComment(false);
    setContent("");
  };

  const handleComment = async () => {
    try {
      const response = await axios.post(
        "http://localhost:6005/api/comments",
        JSON.stringify({ content, blogID: blog._id }),
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.data) {
        throw new Error();
      }
      setComments((prevState) => [...prevState, response.data]);
      setContent("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex items-center cursor-pointer gap-x-1">
          <MessageSquare />
          <span>{comments.length}</span>
        </div>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-xl"
        aria-describedby="dialog-description"
      >
        <DialogHeader>
          <DialogTitle>Comments {comments.length}</DialogTitle>
        </DialogHeader>
        <ScrollArea className="flex flex-col gap-4 py-4 sm:max-h-[400px] max-h-[300px]">
          {comments.length > 0 &&
            comments.map((comment, i) => (
              <Comment
                blog={blog}
                setComments={setComments}
                key={i}
                comment={comment}
              />
            ))}
        </ScrollArea>
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
                value={content}
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
        <div id="dialog-description" className="sr-only">
          This dialog allows users to view and add comments to the blog post.
        </div>
      </DialogContent>
    </Dialog>
  );
}
